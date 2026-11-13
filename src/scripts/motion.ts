import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

function setupLenis() {
  const lenis = new Lenis({ anchors: { offset: -72 } })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
  return lenis
}

const ease = 'power3.out'
const q = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) => Array.from(scope.querySelectorAll<T>(sel))
const fadeUp = (y: number) => ({ opacity: 1, y: 0, startAt: { opacity: 0, y } })

function onEnter(trigger: Element, build: (tl: gsap.core.Timeline) => void, start = 'top 85%') {
  const tl = gsap.timeline({ paused: true, defaults: { ease } })
  build(tl)
  ScrollTrigger.create({ trigger, start, once: true, onEnter: () => tl.play() })
}

function heroIntro() {
  const tl = gsap.timeline({ defaults: { ease } })
  tl.fromTo('[data-anim-header]', { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.4 }, 0)
  tl.to('[data-hero="hello"]', { y: 0, duration: 0.7 }, 0.18)
  tl.to('[data-hero="hello-img"]', { opacity: 1, scale: 1, startAt: { opacity: 0, scale: 0.8 }, duration: 0.6 }, 0.12)
  tl.to('[data-hero="word"]', { y: 0, duration: 0.8, stagger: 0.025 }, 0.26)
  tl.to('[data-hero="panel"]', { opacity: 1, y: 0, scale: 1, startAt: { opacity: 0, y: 24, scale: 0.96 }, duration: 0.9 }, 0.3)
  tl.to('[data-hero="sub"]', { ...fadeUp(16), duration: 0.7 }, 0.56)
  tl.to('[data-hero="cta"]', { ...fadeUp(12), duration: 0.6, stagger: 0.08 }, 0.68)
}

function marquee() {
  const wrap = document.querySelector<HTMLElement>('[data-marquee]')
  const track = document.querySelector<HTMLElement>('[data-marquee-track]')
  if (!wrap || !track) return
  const tween = gsap.to(track, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 })
  wrap.addEventListener('mouseenter', () => gsap.to(tween, { timeScale: 0, duration: 0.3 }))
  wrap.addEventListener('mouseleave', () => gsap.to(tween, { timeScale: 1, duration: 0.3 }))
}

function proof() {
  const section = document.querySelector('[data-impact]')
  if (!section) return
  const nums = q<HTMLElement>('[data-num]', section)
  const render = (el: HTMLElement, v: number) => {
    const f = el.dataset.format
    if (f === 'tilde') el.textContent = v >= 999_500 ? '~1M' : v >= 1000 ? `~${Math.round(v / 1000)}k` : `~${Math.round(v)}`
    else if (f === 'dec') el.textContent = v.toFixed(1).replace('.', el.dataset.decimal ?? '.')
    else el.textContent = String(Math.round(v))
  }
  nums.forEach((el) => {
    const target = Number(el.dataset.num)
    if (target === 0) return
    const s = { v: 0 }
    render(el, 0)
    gsap.to(s, { v: target, duration: 1.6, delay: 0.7, ease, onUpdate: () => render(el, s.v) })
  })
}

function groups() {
  q('[data-group]').forEach((group) => {
    onEnter(group, (tl) => {
      tl.to(q(':scope [data-reveal]', group), { ...fadeUp(20), duration: 0.6, stagger: 0.07 }, 0)
    })
  })
}

function sectionHeads() {
  q('[data-section-head]').forEach((head) => {
    onEnter(head, (tl) => {
      tl.to(q('[data-head="label"]', head), { ...fadeUp(16), duration: 0.6 }, 0)
      tl.to(q('[data-head="title"]', head), { ...fadeUp(24), duration: 0.7, stagger: 0.08 }, 0)
    })
  })
}

function projects() {
  const fine = window.matchMedia('(pointer: fine)').matches
  q('[data-project]').forEach((card) => {
    const media = card.querySelector('[data-media]')!
    onEnter(card, (tl) => {
      tl.to(card, { ...fadeUp(40), duration: 0.8 }, 0)
      tl.to(q('[data-item]', card).slice(0, 3), { ...fadeUp(12), duration: 0.5, stagger: 0.08 }, 0.15)
      tl.to(q('.decisions [data-item]', card), { ...fadeUp(12), duration: 0.5, stagger: 0.08 }, 0.39)
      tl.to(q('[data-tag]', card), { ...fadeUp(12), duration: 0.5, stagger: 0.03 }, 0.7)
      tl.to(q('.links [data-item]', card), { ...fadeUp(12), duration: 0.5, stagger: 0.08 }, 0.9)
      tl.to(media, { opacity: 1, scale: 1, startAt: { opacity: 0, scale: 1.04 }, duration: 0.9 }, 0.1)
    })

    q('[data-parallax]', card).forEach((img) => {
      gsap.fromTo(img, { y: 40 }, { y: -40, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true } })
    })

    if (!fine) return
    const glow = card.querySelector<HTMLElement>('.project-glow')!
    const rx = gsap.quickTo(card, 'rotationX', { duration: 0.15, ease: 'power2.out' })
    const ry = gsap.quickTo(card, 'rotationY', { duration: 0.15, ease: 'power2.out' })
    gsap.set(card, { transformPerspective: 1200 })
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      ry((px - 0.5) * 8)
      rx(-(py - 0.5) * 8)
      glow.style.setProperty('--mx', `${px * 100}%`)
      glow.style.setProperty('--my', `${py * 100}%`)
    })
    card.addEventListener('pointerleave', () => gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.4, ease: 'power2.out' }))
  })
}

function experience() {
  const timeline = document.querySelector<HTMLElement>('[data-timeline]')
  const fill = document.querySelector<HTMLElement>('[data-timeline-fill]')
  if (!timeline || !fill) return
  const jobs = q('[data-job]', timeline)
  gsap.fromTo(
    fill,
    { scaleY: 0 },
    {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: { trigger: jobs[0], endTrigger: jobs[jobs.length - 1], start: 'top 60%', end: 'top 60%', scrub: true },
    },
  )
  jobs.forEach((job) => {
    const marker = job.querySelector('[data-marker]')!
    ScrollTrigger.create({
      trigger: job,
      start: 'top 60%',
      onEnter: () => marker.classList.add('on'),
      onLeaveBack: () => marker.classList.remove('on'),
    })
    onEnter(job, (tl) => {
      tl.to(job, { opacity: 1, x: 0, startAt: { opacity: 0, x: 24 }, duration: 0.7 }, 0)
      tl.to(q('[data-job-part]', job), { ...fadeUp(8), duration: 0.5, stagger: 0.06 }, 0.1)
      tl.to(q('[data-job-tag]', job), { ...fadeUp(8), duration: 0.5, stagger: 0.03 }, 0.25)
    })
  })
}

function contact() {
  const section = document.querySelector('[data-contact]')
  if (!section) return
  onEnter(section, (tl) => {
    tl.to(q('[data-contact-head]', section), { ...fadeUp(16), duration: 0.6 }, 0)
    tl.to(q('[data-contact-word]', section), { y: 0, duration: 0.8, stagger: 0.07 }, 0)
    tl.to(q('[data-contact-text]', section), { ...fadeUp(16), duration: 0.7 }, 0.2)
    tl.to(q('[data-contact-link]', section), { ...fadeUp(12), duration: 0.5, stagger: 0.08 }, 0.3)
  })
}

const root = document.documentElement
const motion = root.classList.contains('motion')

if (motion) {
  gsap.registerPlugin(ScrollTrigger)
  root.classList.add('motion-ready')
  const lenis = setupLenis()
  heroIntro()
  proof()
  marquee()
  groups()
  sectionHeads()
  projects()
  experience()
  contact()
  window.addEventListener('menu', (e) => ((e as CustomEvent<boolean>).detail ? lenis.stop() : lenis.start()))
  window.addEventListener('load', () => ScrollTrigger.refresh())
}
