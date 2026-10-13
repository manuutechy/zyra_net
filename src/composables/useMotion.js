import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin, ScrollToPlugin)

const FAILSAFE_MS = 4400
let mountedAt = 0

const all = (selector, root = document) => Array.from(root.querySelectorAll(selector))

const fontsReady = () => {
  const wait = new Promise((resolve) => setTimeout(resolve, 1000))
  return Promise.race([document.fonts ? document.fonts.ready : wait, wait])
}

const revealAll = () => {
  if (document.querySelector('[data-hide]')) gsap.set('[data-hide]', { autoAlpha: 1 })
}

const padMasks = (split) => {
  split.masks.forEach((mask) => {
    mask.style.paddingBottom = '0.14em'
    mask.style.marginBottom = '-0.14em'
  })
}

/* ---------- Entrances ---------- */

function introHero() {
  const hero = document.getElementById('hero')
  const title = hero?.querySelector('[data-hero-title]')
  if (!hero || !title) return
  if (performance.now() - mountedAt > FAILSAFE_MS) return revealAll()

  const split = SplitText.create(title, { type: 'lines,chars', mask: 'lines' })
  padMasks(split)
  gsap.set(all('[data-hide]', hero), { autoAlpha: 1 })

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, onComplete: () => split.revert() })
  tl.from('[data-hero-tag]', { y: 14, autoAlpha: 0, duration: 0.7 }, 0)
  tl.from(split.chars, { yPercent: 115, duration: 0.95, stagger: 0.022 }, 0.1)
  tl.from('[data-hero-sub]', { y: 18, autoAlpha: 0, duration: 0.8 }, 0.55)
  tl.from('[data-hero-cta]', { y: 18, autoAlpha: 0, duration: 0.8 }, 0.7)
  tl.from(all('[data-hero-stat]', hero), { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.08 }, 0.85)
}

function heroAmbient() {
  const hero = document.getElementById('hero')
  if (!hero) return

  const content = hero.querySelector('[data-hero-content]')
  if (content) {
    gsap.fromTo(
      content,
      { yPercent: 0, opacity: 1 },
      {
        yPercent: -10,
        opacity: 0.1,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom 30%', scrub: true },
      }
    )
  }

  const photo = hero.querySelector('[data-hero-img]')
  if (photo) {
    gsap.to(photo, {
      yPercent: 9,
      scale: 1.06,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    })
  }

  // Speed streaks: thin light trails racing across the hero.
  all('[data-streak]', hero).forEach((streak, index) => {
    const width = streak.offsetWidth
    const travel = window.innerWidth + width * 2
    gsap.set(streak, { x: -width })
    gsap.to(streak, {
      x: travel,
      duration: gsap.utils.random(1.1, 2.4),
      ease: 'power2.in',
      repeat: -1,
      repeatDelay: gsap.utils.random(0.3, 2.2),
      delay: index * 0.22,
    })
  })
}

function marquee() {
  const track = document.querySelector('[data-marquee-track]')
  if (!track) return

  const loop = gsap.to(track, { xPercent: -50, duration: 34, ease: 'none', repeat: -1 })
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      const boost = Math.min(Math.abs(self.getVelocity()) / 260, 9)
      const dir = self.direction || 1
      const skew = gsap.utils.clamp(-10, 10, -self.getVelocity() / 140)
      gsap.to(track, {
        skewX: skew,
        duration: 0.25,
        overwrite: 'auto',
        onComplete: () => gsap.to(track, { skewX: 0, duration: 0.9, ease: 'power3.out' }),
      })
      gsap.to(loop, {
        timeScale: dir * (1 + boost),
        duration: 0.3,
        overwrite: true,
        onComplete: () => gsap.to(loop, { timeScale: dir, duration: 1.2 }),
      })
    },
  })
}

function scrollReveals() {
  all('.hairline').forEach((line) => {
    gsap.fromTo(
      line,
      { scaleY: 0, transformOrigin: '50% 0%' },
      { scaleY: 1, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: line, start: 'top 95%', once: true } }
    )
  })

  all('[data-clip]').forEach((frame) => {
    gsap.fromTo(
      frame,
      { clipPath: 'inset(0 0 100% 0 round 16px)' },
      {
        clipPath: 'inset(0 0 0% 0 round 16px)',
        duration: 1.3,
        ease: 'expo.out',
        clearProps: 'clipPath',
        scrollTrigger: { trigger: frame, start: 'top 88%', once: true },
      }
    )
    const img = frame.querySelector('[data-shot-img]')
    if (img) {
      gsap.fromTo(
        img,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      )
    }
  })

  all('[data-bar]').forEach((bar) => {
    gsap.fromTo(
      bar,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: bar, start: 'top 92%', once: true } }
    )
  })

  all('ul').forEach((list) => {
    const rows = all('[data-row]', list)
    if (!rows.length) return
    gsap.from(rows, {
      y: 24,
      autoAlpha: 0,
      duration: 0.9,
      ease: 'expo.out',
      stagger: 0.09,
      scrollTrigger: { trigger: list, start: 'top 88%', once: true },
    })
  })

  const footerName = document.querySelector('[data-footer-name]')
  if (footerName) {
    const split = SplitText.create(footerName, { type: 'lines,chars', mask: 'lines' })
    padMasks(split)
    gsap.from(split.chars, {
      yPercent: 115,
      duration: 1.1,
      ease: 'expo.out',
      stagger: 0.04,
      scrollTrigger: { trigger: footerName, start: 'top 96%', once: true },
    })
  }

  all('[data-ring]').forEach((ring, index) => {
    gsap.fromTo(
      ring,
      { scale: 1, opacity: 0.9, svgOrigin: '200 200' },
      { scale: 3.6, opacity: 0, svgOrigin: '200 200', duration: 3, ease: 'power1.out', repeat: -1, delay: index * 1.5 }
    )
  })
}

function counters() {
  all('[data-count]').forEach((el) => {
    const to = Number(el.dataset.count)
    if (!Number.isFinite(to)) return
    const suffix = el.dataset.suffix ?? ''
    const decimals = Number(el.dataset.decimals ?? 0)
    const final = el.textContent
    const state = { value: 0 }
    const delay = el.closest('#hero') ? 1.0 : 0

    ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () => {
        gsap.to(state, {
          value: to,
          duration: 1.6,
          delay,
          ease: 'power3.out',
          onUpdate: () => {
            el.textContent =
              state.value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) +
              suffix
          },
          onComplete: () => {
            el.textContent = final
          },
        })
      },
    })
  })
}

function revealLines() {
  all('[data-reveal-lines]').forEach((heading) => {
    const split = SplitText.create(heading, { type: 'lines', mask: 'lines' })
    padMasks(split)
    gsap.from(split.lines, {
      yPercent: 115,
      duration: 1.1,
      ease: 'expo.out',
      stagger: 0.1,
      scrollTrigger: { trigger: heading, start: 'top 90%', once: true },
    })
  })
}

/* ---------- Navigation and scrolling ---------- */

function scrollToTarget(target) {
  const root = document.documentElement
  root.style.scrollBehavior = 'auto'
  const restore = () => root.style.removeProperty('scroll-behavior')
  gsap.to(window, {
    scrollTo: { y: target, offsetY: 72, autoKill: true },
    duration: 1.2,
    ease: 'power4.inOut',
    onComplete: restore,
    onInterrupt: restore,
  })
}

function anchorLinks() {
  const controller = new AbortController()
  document.addEventListener(
    'click',
    (event) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = event.target.closest('a')
      if (!anchor || !anchor.hash || anchor.pathname !== window.location.pathname) return
      if (!document.querySelector(anchor.hash)) return
      event.preventDefault()
      scrollToTarget(anchor.hash)
      window.history.replaceState(null, '', anchor.hash)
    },
    { signal: controller.signal, capture: true }
  )
  return () => controller.abort()
}

function navBar(instant) {
  const bar = document.querySelector('[data-nav-bar]')
  if (!bar) return
  let hidden = false

  const setHidden = (hide) => {
    if (hide === hidden) return
    hidden = hide
    const vars = { yPercent: hide ? -100 : 0 }
    if (instant) gsap.set(bar, vars)
    else gsap.to(bar, { ...vars, duration: hide ? 0.35 : 0.5, ease: hide ? 'power2.in' : 'expo.out', overwrite: true })
  }

  const trigger = ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      if (document.body.style.overflow === 'hidden') return setHidden(false)
      if (self.scroll() < 200) return setHidden(false)
      setHidden(self.direction === 1)
    },
  })

  return () => {
    trigger.kill()
    gsap.set(bar, { clearProps: 'all' })
  }
}

/* ---------- Interaction ---------- */

function faqMotion() {
  const controller = new AbortController()

  all('details[data-faq]').forEach((item) => {
    const summary = item.querySelector('summary')
    const panel = item.querySelector('p')
    if (!summary || !panel) return

    summary.addEventListener(
      'click',
      (event) => {
        event.preventDefault()
        gsap.killTweensOf(panel)
        panel.style.overflow = 'hidden'
        const clear = () => gsap.set(panel, { clearProps: 'height,opacity,overflow' })

        if (item.open) {
          gsap.to(panel, {
            height: 0,
            opacity: 0,
            duration: 0.35,
            ease: 'power3.inOut',
            onComplete: () => {
              item.open = false
              clear()
            },
          })
        } else {
          item.open = true
          gsap.fromTo(panel, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out', onComplete: clear })
        }
      },
      { signal: controller.signal }
    )
  })

  return () => controller.abort()
}

function pointerEffects() {
  const controller = new AbortController()
  const { signal } = controller

  all('[data-scramble]').forEach((el) => {
    const original = el.textContent ?? ''
    const host = el.closest('a') ?? el
    host.addEventListener(
      'pointerenter',
      () => {
        gsap.to(el, {
          duration: 0.6,
          ease: 'none',
          scrambleText: { text: original, chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', speed: 0.8, revealDelay: 0.12 },
        })
      },
      { signal }
    )
  })

  all('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' })
    el.addEventListener(
      'pointermove',
      (e) => {
        const r = el.getBoundingClientRect()
        xTo((e.clientX - (r.left + r.width / 2)) * 0.22)
        yTo((e.clientY - (r.top + r.height / 2)) * 0.3)
      },
      { signal }
    )
    el.addEventListener('pointerleave', () => {
      xTo(0)
      yTo(0)
    }, { signal })
  })

  return () => controller.abort()
}

/* ---------- Entry point ---------- */

export function initMotion() {
  mountedAt = performance.now()
  const mm = gsap.matchMedia()
  const bar = document.querySelector('[data-progress]')

  mm.add('(prefers-reduced-motion: reduce)', () => {
    revealAll()
    const cleanNav = navBar(true)
    return () => cleanNav?.()
  })

  mm.add('(prefers-reduced-motion: no-preference)', (ctx) => {
    let alive = true

    if (bar) {
      gsap.set(bar, { scaleX: 0, transformOrigin: '0% 50%' })
      gsap.to(bar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.25 },
      })
    }

    fontsReady().then(() => {
      if (!alive) return
      ctx.add(() => {
        introHero()
        revealLines()
        ScrollTrigger.refresh()
      })
    })

    heroAmbient()
    marquee()
    scrollReveals()
    counters()
    const cleanNav = navBar(false)
    const cleanAnchors = anchorLinks()

    return () => {
      alive = false
      cleanNav?.()
      cleanAnchors()
    }
  })

  mm.add('(prefers-reduced-motion: no-preference)', () => faqMotion())
  mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => pointerEffects())

  return () => mm.revert()
}
