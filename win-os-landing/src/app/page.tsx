// @ts-nocheck
'use client';
import { useEffect } from 'react';
import Script from 'next/script';
import dynamic from 'next/dynamic';
const Core3D = dynamic(() => import('@/components/Core3D'), { ssr: false });


export default function RedesignedLanding() {
  useEffect(() => {
    // Scripts extracted from body
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      }, observerOptions);
      revealElements.forEach(el => observer.observe(el));
    }
    
    const style = document.createElement('style');
    style.innerHTML = `
    /* Executive Glow Effects & Custom Utilities */
    .gold-gradient-bg {
      background: linear-gradient(135deg, #F3C64F 0%, #E5B842 50%, #C9A24B 100%);
    }
    .gold-gradient-text {
      background: linear-gradient(135deg, #FFF0B8 0%, #F3C64F 40%, #E5B842 70%, #C9A24B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .gold-card-sheen {
      border-top: 1px solid rgba(229, 184, 66, 0.45);
    }
    .cyan-card-sheen {
      border-top: 1px solid rgba(0, 229, 255, 0.4);
    }
    .executive-card-glow {
      box-shadow: 0 0 35px rgba(229, 184, 66, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.08);
    }
    .terminal-scrollbar::-webkit-scrollbar {
      width: 4px;
    }
    .terminal-scrollbar::-webkit-scrollbar-track {
      background: rgba(15, 19, 28, 0.8);
    }
    .terminal-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(229, 184, 66, 0.25);
      border-radius: 4px;
    }

    /* Cyber Background Grid */
    .cyber-grid-overlay {
      background-size: 40px 40px;
      background-image: 
        linear-gradient(to right, rgba(229, 184, 66, 0.04) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229, 184, 66, 0.04) 1px, transparent 1px);
      mask-image: radial-gradient(circle at 50% 25%, black 40%, transparent 80%);
      -webkit-mask-image: radial-gradient(circle at 50% 25%, black 40%, transparent 80%);
    }

    /* Floating Ambient Glow Orbs */
    @keyframes orbFloatA {
      0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.22; }
      50% { transform: translate(30px, -45px) scale(1.12); opacity: 0.35; }
    }
    @keyframes orbFloatB {
      0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.18; }
      50% { transform: translate(-35px, 40px) scale(1.15); opacity: 0.28; }
    }
    .ambient-orb-gold {
      animation: orbFloatA 14s ease-in-out infinite alternate;
    }
    .ambient-orb-cyan {
      animation: orbFloatB 18s ease-in-out infinite alternate;
    }

    /* Living Terminal Laser Scanner Line */
    @keyframes laserScan {
      0% { top: 0%; opacity: 0; }
      15% { opacity: 0.85; }
      85% { opacity: 0.85; }
      100% { top: 98%; opacity: 0; }
    }
    .laser-scanner-beam {
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent 0%, rgba(0, 229, 255, 0.8) 25%, rgba(243, 198, 79, 1) 50%, rgba(0, 229, 255, 0.8) 75%, transparent 100%);
      box-shadow: 0 0 16px rgba(0, 229, 255, 0.8), 0 0 8px rgba(243, 198, 79, 0.8);
      pointer-events: none;
      z-index: 20;
      animation: laserScan 6.5s ease-in-out infinite;
    }

    /* Breathing Status Ring */
    @keyframes ringPulse {
      0% { transform: scale(0.95); opacity: 0.8; box-shadow: 0 0 0 0 rgba(0, 229, 255, 0.6); }
      70% { transform: scale(1.15); opacity: 0; box-shadow: 0 0 0 8px rgba(0, 229, 255, 0); }
      100% { transform: scale(0.95); opacity: 0; }
    }
    .pulsing-ring {
      animation: ringPulse 2.4s infinite cubic-bezier(0.45, 0, 0.2, 1);
    }

    /* Spotlight interactive card effect */
    .spotlight-card {
      position: relative;
      isolation: isolate;
      transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease;
    }
    .spotlight-card::before {
      content: '';
      position: absolute;
      inset: -1px;
      border-radius: inherit;
      background: radial-gradient(550px circle at var(--mouse-x, -200px) var(--mouse-y, -200px), rgba(243, 198, 79, 0.16), transparent 50%);
      pointer-events: none;
      z-index: -1;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .spotlight-card:hover::before {
      opacity: 1;
    }

    /* Metallic CTA Light Sheen Sweep */
    .cta-sheen {
      position: relative;
      overflow: hidden;
    }
    .cta-sheen::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -60%;
      width: 40%;
      height: 200%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.45) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: rotate(25deg);
      pointer-events: none;
      animation: sheenPass 4.5s ease-in-out infinite;
    }
    @keyframes sheenPass {
      0%, 65% { transform: translateX(0%) rotate(25deg); }
      100% { transform: translateX(450%) rotate(25deg); }
    }

    /* Offer Flagship Card Border Glow Pulse */
    @keyframes offerGlowPulse {
      0%, 100% { box-shadow: 0 0 30px rgba(229, 184, 66, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1); }
      50% { box-shadow: 0 0 55px rgba(229, 184, 66, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2); }
    }
    .offer-glow-card {
      animation: offerGlowPulse 5s ease-in-out infinite;
    }

    /* Scroll Reveal Transition Utility */
    .reveal-on-scroll {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-on-scroll.is-revealed {
      opacity: 1;
      transform: translateY(0);
    }

    /* Accessibility / reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .ambient-orb-gold,
      .ambient-orb-cyan,
      .laser-scanner-beam,
      .pulsing-ring,
      .cta-sheen::after,
      .offer-glow-card {
        animation: none !important;
      }
      .reveal-on-scroll {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
      .laser-scanner-beam {
        display: none;
      }
    }
  `;
    document.head.appendChild(style);
  }, []);

  // Make sure toggleFaq is on window for inline onclicks
  useEffect(() => {
    
    window.toggleFaq = function(btn) {
      const card = btn.closest('.spotlight-card') || btn.parentElement;
      const panel = card.querySelector('.faq-content');
      const icon = btn.querySelector('.material-symbols-outlined');
      const isOpen = panel.classList.contains('max-h-96');

      document.querySelectorAll('#faq-container .faq-content').forEach(p => {
        p.classList.remove('max-h-96', 'opacity-100');
        p.classList.add('max-h-0', 'opacity-0');
      });
      document.querySelectorAll('#faq-container .material-symbols-outlined').forEach(ic => {
        ic.classList.remove('rotate-180');
        ic.classList.add('rotate-0');
      });

      if (!isOpen) {
        panel.classList.remove('max-h-0', 'opacity-0');
        panel.classList.add('max-h-96', 'opacity-100');
        if (icon) {
          icon.classList.remove('rotate-0');
          icon.classList.add('rotate-180');
        }
      }
    };

  }, []);

  const rawHtml = `
<!-- ================= ATMOSPHERIC AMBIENT GLOW & CYBER GRID ================= -->
<div class="fixed inset-0 cyber-grid-overlay pointer-events-none z-0"></div>
<div class="fixed top-12 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0 ambient-orb-gold"></div>
<div class="fixed top-1/3 left-10 w-[420px] h-[360px] bg-telemetry-cyan/10 rounded-full blur-[130px] pointer-events-none z-0 ambient-orb-cyan"></div>
<div class="fixed bottom-24 right-10 w-[500px] h-[400px] bg-primary/8 rounded-full blur-[150px] pointer-events-none z-0 ambient-orb-gold" style="animation-delay: -7s;"></div>
<div class="relative z-10">
<!-- ================= TOP APP BAR (Shared Component: TopNavBar) ================= -->
<header class="bg-surface-deep/80 dark:bg-surface-deep/80 backdrop-blur-md text-primary dark:text-primary docked full-width top-0 sticky z-50 shadow-none border-b border-border-subtle dark:border-border-subtle">
<div class="flex justify-between items-center max-w-7xl mx-auto px-6 py-4 w-full">
<!-- Brand Anchor -->
<a class="flex items-center gap-3 group" href="#">
<div class="relative w-9 h-9 flex items-center justify-center p-1 rounded-lg bg-surface-elevated/80 border border-primary/30 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(229,184,66,0.35)] transition-all">
<img alt="Win OS Logo" class="w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(229,184,66,0.5)] transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AEtjO1V28-_pLfpyTRMgwSUH6bYyL9t4v0vSncV2Y6iwVzpAXwyv0CA4Xf4aP04CCW87PD7jyanaQjFnuEK9HPQd72hwGmbH3-dyIhQ3YenwiLcR4xLIRhUH_DLcvn2sCv6JpBomJvwnQ1NV5qoDn4HRxvheFkDjsH9LY8k3-uRNc7A_6gRKhvPUCuO7NezGvaaunapzEp0GUGzoLwuGWkHgZqgoVwa3Hs4oz8TdpFMrR-g1NFkXKcUq7ylfEDQN"/>
</div>
<div class="flex flex-col">
<span class="font-headline-sm text-headline-sm font-bold tracking-tight text-primary dark:text-primary flex items-center gap-1.5">
            Win OS
            <span class="relative flex h-2 w-2 items-center justify-center">
<span class="absolute inline-flex h-full w-full rounded-full bg-telemetry-cyan pulsing-ring"></span>
<span class="relative inline-block w-1.5 h-1.5 rounded-full bg-telemetry-cyan"></span>
</span>
</span>
<span class="font-label-mono-sm text-[9px] text-on-surface-variant tracking-wider uppercase opacity-75">SISTEMA OPERACIONAL DE IA</span>
</div>
</a>
<!-- Web Nav Links -->
<nav class="hidden md:flex items-center gap-8">
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface transition-colors font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-all duration-150" href="#negocio">Estrutura</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface transition-colors font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-all duration-150" href="#jornadas">Funcionalidades</a>
<a class="text-primary dark:text-primary border-b-2 border-primary dark:border-primary pb-1 font-label-mono-sm text-label-mono-sm" href="#skills">Diretoria</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface transition-colors font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-all duration-150" href="#oferta">Preço</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface transition-colors font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-all duration-150" href="#faq">Dúvidas</a>
</nav>
<!-- Trailing Action Cluster -->
<div class="flex items-center gap-3">
<a class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border-subtle bg-surface-charcoal/60 text-on-surface font-label-mono-sm text-label-mono-sm hover:border-telemetry-cyan/60 hover:shadow-[0_0_12px_rgba(0,229,255,0.2)] transition-all duration-150" href="#oferta">
<span class="w-1.5 h-1.5 rounded-full bg-telemetry-cyan"></span>Falar no WhatsApp</a>
<a class="cta-sheen gold-gradient-bg text-on-primary font-headline-sm text-body-sm font-semibold px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(229,184,66,0.25)] hover:shadow-[0_0_28px_rgba(229,184,66,0.45)] transition-all duration-150 active:scale-95 flex items-center gap-2" href="https://pay.kiwify.com.br/lYkLOmo" rel="noopener noreferrer" target="_blank">
<span>Acessar Sistema</span>
<span class="font-label-mono-sm text-[11px] bg-black/20 px-1.5 py-0.5 rounded text-surface-deep font-bold">R\$ 47</span>
</a>
</div>
</div>
</header>
<!-- ================= HERO SECTION ================= -->
<section class="relative pt-12 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
<div class="relative z-10 text-center max-w-4xl mx-auto space-y-6 reveal-on-scroll">
<!-- High-Tech Badge -->
<div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-elevated/70 border border-primary/30 backdrop-blur-md hover:border-primary/60 transition-colors">
<span class="relative flex h-2 w-2 items-center justify-center">
<span class="absolute inline-flex h-full w-full rounded-full bg-telemetry-cyan pulsing-ring"></span>
<span class="relative inline-block w-2 h-2 rounded-full bg-telemetry-cyan"></span>
</span>
<span class="font-label-mono-sm text-label-mono-sm text-primary tracking-wider">
          A ESTRUTURA DEFINITIVA // SUA EMPRESA COM IA
        </span>
</div>
<!-- Main Headline -->
<h1 class="hidden md:block font-headline-hero text-headline-hero text-on-surface font-extrabold tracking-tight">
        Sua empresa pronta para <br/>
<span class="gold-gradient-text">a sua IA favorita trabalhar.</span>
</h1>
<h1 class="block md:hidden font-headline-hero-mobile text-headline-hero-mobile text-on-surface font-bold tracking-tight">
        Sua empresa pronta para <br/>
<span class="gold-gradient-text">a sua IA favorita trabalhar.</span>
</h1>
<!-- Subheadline -->
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
        O Win OS não é mais uma IA solta. É a estrutura de pastas, processos e dezenas de skills prontas para você conectar no <strong class="text-primary font-medium">ChatGPT</strong>, <strong class="text-primary font-medium">Claude</strong> ou <strong class="text-primary font-medium">Gemini</strong> e ter uma diretoria completa trabalhando pelo seu negócio.
      </p>
<!-- CTA Stack -->
<div class="relative z-20 pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
<a class="cta-sheen w-full sm:w-auto gold-gradient-bg text-on-primary font-headline-sm text-headline-sm font-bold px-8 py-4 rounded-xl shadow-[0_0_32px_rgba(229,184,66,0.35)] hover:shadow-[0_0_45px_rgba(229,184,66,0.6)] transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 group" href="https://pay.kiwify.com.br/lYkLOmo" rel="noopener noreferrer" target="_blank">
<span>Quero organizar minha empresa</span>
<span class="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
<!-- Trust Meta Bar -->
<div class="flex flex-wrap items-center justify-center gap-6 pt-3 text-on-surface-variant font-label-mono-sm text-label-mono-sm opacity-80">
<span class="flex items-center gap-1.5 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-primary text-[16px]" data-icon="check_circle">check_circle</span>
          Acesso vitalício imediato
        </span>
<span class="flex items-center gap-1.5 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-primary text-[16px]" data-icon="verified_user">verified_user</span>
          Garantia incondicional de 7 dias
        </span>
<span class="flex items-center gap-1.5 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-primary text-[16px]" data-icon="bolt">bolt</span>
          Setup em 15 minutos
        </span>
</div>
<div class="pt-1 text-xs text-outline font-label-mono-sm tracking-wider uppercase">
        A nova evolução do empreendedorismo, para negócios reais
      </div>
</div>
<!-- ================= INTERACTIVE VISUAL TELEMETRY SANDBOX ================= -->
<div class="mt-14 max-w-5xl mx-auto rounded-2xl bg-surface-charcoal/80 border border-white/10 backdrop-blur-2xl shadow-2xl p-1 md:p-2 executive-card-glow relative overflow-hidden reveal-on-scroll" id="negocio">
<!-- Laser Scanner Beam -->
<div class="laser-scanner-beam"></div>
<!-- Glow Accents -->
<div class="absolute -top-1 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent"></div>
<!-- Window Controls Header -->
<div class="flex items-center justify-between px-4 py-3 border-b border-border-subtle bg-surface-deep/60 rounded-t-xl">
<div class="flex items-center gap-2">
<div class="w-3 h-3 rounded-full bg-error/80 border border-error"></div>
<div class="w-3 h-3 rounded-full bg-primary/80 border border-primary"></div>
<div class="w-3 h-3 rounded-full bg-telemetry-cyan/80 border border-telemetry-cyan"></div>
<span class="ml-3 font-label-mono-sm text-label-mono-sm text-on-surface-variant flex items-center gap-2">
<span class="text-primary font-bold">win-os</span> — minha-empresa
          </span>
</div>
<div class="flex items-center gap-2 font-label-mono-sm text-label-mono-sm text-telemetry-cyan bg-telemetry-cyan/10 px-2.5 py-1 rounded border border-telemetry-cyan/25 shadow-[0_0_12px_rgba(0,229,255,0.15)]">
<span class="relative flex h-2 w-2 items-center justify-center">
<span class="absolute inline-flex h-full w-full rounded-full bg-telemetry-cyan pulsing-ring"></span>
<span class="relative inline-block w-1.5 h-1.5 rounded-full bg-telemetry-cyan"></span>
</span>
<span class="font-semibold tracking-wide">IA CONECTADA // KERNEL v2.4</span>
</div>
</div>
<!-- Sandbox Body Split: File Tree & Executed Intelligence -->
<div class="grid grid-cols-1 md:grid-cols-12 min-h-[380px] divide-y md:divide-y-0 md:divide-x divide-border-subtle">
<!-- Left: Tree Directory -->
<div class="md:col-span-4 p-5 bg-surface-deep/40 font-label-mono-sm text-body-sm space-y-4">
<div class="flex items-center justify-between text-xs text-on-surface-variant tracking-wider uppercase pb-1 border-b border-white/5">
<span>DIRETÓRIO DA EMPRESA</span>
<span class="text-primary font-semibold flex items-center gap-1.5">
<span class="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
  6 NÓS ATIVOS
</span>
</div>
<div class="space-y-2.5 terminal-scrollbar overflow-y-auto max-h-[300px] pr-2">
<!-- Item 1: Negócio Active -->
<div class="p-2 rounded bg-surface-elevated/70 border border-primary/40 shadow-[0_0_15px_rgba(229,184,66,0.15)]">
<div class="flex items-center gap-2 text-primary font-medium">
<span class="material-symbols-outlined text-[16px]" data-icon="folder_open">folder_open</span>
<span>▸ negócio</span>
</div>
<div class="pl-6 pt-1.5 space-y-1 text-xs text-on-surface-variant">
<p class="flex items-center gap-1.5 text-primary font-medium">
<span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> contexto-do-negocio.md
                </p>
<p class="flex items-center gap-1.5 hover:text-on-surface transition-colors cursor-pointer">
<span class="w-1 h-1 rounded-full bg-outline"></span> objetivos.md
                </p>
</div>
</div>
<!-- Item 2: Financeiro -->
<div class="p-2 rounded hover:bg-surface-elevated/40 transition-colors cursor-pointer group/node">
<div class="flex items-center gap-2 text-on-surface font-medium group-hover/node:text-telemetry-cyan transition-colors">
<span class="material-symbols-outlined text-[16px] text-telemetry-cyan" data-icon="folder">folder</span>
<span>▸ financeiro</span>
</div>
<div class="pl-6 pt-1 space-y-1 text-xs text-on-surface-variant">
<p class="hover:text-primary transition-colors cursor-pointer">fluxo-de-caixa.md</p>
<p class="hover:text-primary transition-colors cursor-pointer">precificacao.md</p>
</div>
</div>
<!-- Item 3: Clientes -->
<div class="p-2 rounded hover:bg-surface-elevated/40 transition-colors cursor-pointer group/node">
<div class="flex items-center gap-2 text-on-surface font-medium group-hover/node:text-telemetry-cyan transition-colors">
<span class="material-symbols-outlined text-[16px] text-telemetry-cyan" data-icon="folder">folder</span>
<span>▸ clientes</span>
</div>
<div class="pl-6 pt-1 space-y-1 text-xs text-on-surface-variant">
<p class="hover:text-primary transition-colors cursor-pointer">base-de-clientes.md</p>
<p class="hover:text-primary transition-colors cursor-pointer">jornada.md</p>
</div>
</div>
<!-- Item 4: Marketing -->
<div class="p-2 rounded hover:bg-surface-elevated/40 transition-colors cursor-pointer group/node">
<div class="flex items-center gap-2 text-on-surface font-medium group-hover/node:text-telemetry-cyan transition-colors">
<span class="material-symbols-outlined text-[16px] text-telemetry-cyan" data-icon="folder">folder</span>
<span>▸ marketing</span>
</div>
<div class="pl-6 pt-1 space-y-1 text-xs text-on-surface-variant">
<p class="hover:text-primary transition-colors cursor-pointer">calendario.md</p>
<p class="hover:text-primary transition-colors cursor-pointer">campanhas.md</p>
</div>
</div>
<!-- Item 5: Processos & Propostas -->
<div class="p-2 rounded hover:bg-surface-elevated/40 transition-colors cursor-pointer group/node">
<div class="flex items-center gap-2 text-on-surface font-medium group-hover/node:text-telemetry-cyan transition-colors">
<span class="material-symbols-outlined text-[16px] text-telemetry-cyan" data-icon="folder">folder</span>
<span>▸ processos &amp; propostas</span>
</div>
</div>
</div>
</div>
<!-- Right: Real-time Telemetry & Intelligence Cross-Analysis -->
<div class="md:col-span-8 p-6 flex flex-col justify-between bg-surface-deep/70">
<div class="space-y-4">
<!-- Active File Breadcrumb -->
<div class="flex items-center justify-between border-b border-border-subtle pb-3">
<div class="flex items-center gap-2 font-label-mono-sm text-label-mono-sm text-primary">
<span class="material-symbols-outlined text-[16px]" data-icon="description">description</span>
<span># contexto-do-negocio.md</span>
</div>
<span class="font-label-mono-sm text-[11px] text-outline flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-telemetry-cyan animate-ping"></span>
  Leitura multi-vetorial ativa
</span>
</div>
<p class="font-body-md text-on-surface-variant leading-relaxed">
              A IA lê o contexto de cada pasta e cruza as informações — <span class="text-primary font-medium">ex.: financeiro + clientes</span> — para sugerir a próxima ação da sua empresa de maneira preditiva e cirúrgica.
            </p>
<!-- Intelligence Card Output (High-Impact Highlight) -->
<div class="mt-4 p-5 rounded-xl bg-surface-elevated/90 border border-primary/40 relative overflow-hidden shadow-lg hover:border-primary transition-all duration-300">
<div class="absolute -right-6 -bottom-6 w-32 h-32 bg-primary/15 rounded-full blur-2xl pointer-events-none"></div>
<div class="flex items-center justify-between pb-3">
<div class="flex items-center gap-2 text-primary font-label-mono-sm text-label-mono-sm">
<span class="material-symbols-outlined text-[18px]" data-icon="psychology">psychology</span>
<span>→ sugestão da IA (Executive Core)</span>
</div>
<span class="px-2 py-0.5 rounded bg-telemetry-cyan/15 text-telemetry-cyan font-label-mono-sm text-[10px] border border-telemetry-cyan/30">
                  Cruzamento: Financeiro + CRM
                </span>
</div>
<blockquote class="font-label-mono-lg text-label-mono-lg text-primary-fixed border-l-2 border-primary pl-4 py-1 leading-relaxed">
                “Seu fluxo de caixa cai em 12 dias. Aqui estão 3 clientes inativos com maior LTV para reativar antes disso com uma proposta customizada.”
              </blockquote>
<div class="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-label-mono-sm text-on-surface-variant">
<span>Ação gerada: Script de reativação + Proposta formatada</span>
<span class="text-telemetry-cyan flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]" data-icon="done_all">done_all</span> Pronto para envio
                </span>
</div>
</div>
</div>
<!-- Micro Terminal Status Footer -->
<div class="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-outline font-label-mono-sm">
<span class="flex items-center gap-1.5">
<span class="text-primary">\$</span> winos@corporation:~# status --all-nodes
</span>
<span class="text-primary font-semibold flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
  100% OPERACIONAL
</span>
</div>
</div>
</div>
</div>
</section>
<!-- ================= SECTION: AS 3 JORNADAS ================= -->
<section class="py-20 px-6 max-w-7xl mx-auto border-t border-border-subtle/60" id="jornadas">
<div class="text-center max-w-2xl mx-auto mb-16 space-y-3 reveal-on-scroll">
<div class="font-label-mono-sm text-label-mono-sm text-telemetry-cyan tracking-widest uppercase">
        / jornadas.sys
      </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
        Qual é a sua jornada?
      </h2>
<p class="font-body-md text-on-surface-variant">
        O Win OS adapta sua arquitetura para o estágio exato de maturidade do seu negócio.
      </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- Card 1: Iniciar -->
<div class="spotlight-card p-8 rounded-2xl bg-surface-charcoal/70 border border-white/10 backdrop-blur-xl gold-card-sheen hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 reveal-on-scroll">
<div class="flex items-center justify-between mb-6">
<div class="w-12 h-12 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[26px]" data-icon="rocket_launch">rocket_launch</span>
</div>
<span class="font-label-mono-sm text-label-mono-sm text-outline group-hover:text-primary transition-colors">
            MODULO.01
          </span>
</div>
<h3 class="font-headline-md text-headline-md font-semibold text-on-surface mb-3 group-hover:text-primary transition-colors">
          Iniciar
        </h3>
<p class="font-body-md text-on-surface-variant leading-relaxed">
          Comece sua empresa do zero, com estrutura pronta desde o primeiro dia. Sem reuniões caóticas e sem planilhas perdidas.
        </p>
<div class="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-label-mono-sm text-outline">
<span>SETUP: IMEDIATO</span>
<span class="text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Ver detalhes <span class="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
</span>
</div>
</div>
<!-- Card 2: Organizar -->
<div class="spotlight-card p-8 rounded-2xl bg-surface-charcoal/70 border border-white/10 backdrop-blur-xl gold-card-sheen hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 relative reveal-on-scroll">
<div class="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-primary text-surface-deep font-label-mono-sm text-[10px] font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(229,184,66,0.4)]">
          Mais Procurado
        </div>
<div class="flex items-center justify-between mb-6">
<div class="w-12 h-12 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[26px]" data-icon="folder_special">folder_special</span>
</div>
<span class="font-label-mono-sm text-label-mono-sm text-outline group-hover:text-primary transition-colors">
            MODULO.02
          </span>
</div>
<h3 class="font-headline-md text-headline-md font-semibold text-on-surface mb-3 group-hover:text-primary transition-colors">
          Organizar
        </h3>
<p class="font-body-md text-on-surface-variant leading-relaxed">
          Coloque ordem no que já existe: finanças, clientes e processos num só lugar. Ganhe visão executiva e acabe com o retrabalho.
        </p>
<div class="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-label-mono-sm text-outline">
<span>FLUXO: CENTRALIZADO</span>
<span class="text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Ver detalhes <span class="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
</span>
</div>
</div>
<!-- Card 3: Digitalizar -->
<div class="spotlight-card p-8 rounded-2xl bg-surface-charcoal/70 border border-white/10 backdrop-blur-xl cyan-card-sheen hover:border-telemetry-cyan/50 transition-all duration-300 group hover:-translate-y-1 reveal-on-scroll">
<div class="flex items-center justify-between mb-6">
<div class="w-12 h-12 rounded-xl bg-telemetry-cyan/10 border border-telemetry-cyan/25 flex items-center justify-center text-telemetry-cyan group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[26px]" data-icon="computer">computer</span>
</div>
<span class="font-label-mono-sm text-label-mono-sm text-outline group-hover:text-telemetry-cyan transition-colors">
            MODULO.03
          </span>
</div>
<h3 class="font-headline-md text-headline-md font-semibold text-on-surface mb-3 group-hover:text-telemetry-cyan transition-colors">
          Digitalizar
        </h3>
<p class="font-body-md text-on-surface-variant leading-relaxed">
          Transforme um negócio físico ou tradicional em uma operação digital inteligente, pronta para escalar com apoio de agentes autônomos.
        </p>
<div class="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-label-mono-sm text-outline">
<span>ESCALA: EXPONENCIAL</span>
<span class="text-telemetry-cyan flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Ver detalhes <span class="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
</span>
</div>
</div>
</div>
</section>
<!-- ================= SECTION: COMO OPERA NA PRÁTICA ================= -->
<section class="py-20 px-6 max-w-7xl mx-auto">
<div class="text-center max-w-3xl mx-auto mb-16 space-y-3 reveal-on-scroll">
<div class="font-label-mono-sm text-label-mono-sm text-primary tracking-widest uppercase">
        / aplicacao.sys
      </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
        Como o Win OS opera na prática
      </h2>
<p class="font-body-md text-on-surface-variant">
        Soluções estruturadas para resolver os principais gargalos de quem precisa produzir mais com menos tempo.
      </p>
</div>
<!-- 4 Sector Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Sector 1 -->
<div class="spotlight-card p-8 rounded-2xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between mb-4">
<span class="font-label-mono-sm text-label-mono-sm text-primary bg-primary/10 px-3 py-1 rounded border border-primary/20">
            MARKETING &amp; CRIAÇÃO
          </span>
<span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="campaign">campaign</span>
</div>
<h3 class="font-headline-md text-headline-md font-semibold text-on-surface mb-2">
          Agências &amp; Produtores de Conteúdo
        </h3>
<p class="font-body-md text-on-surface-variant mb-6 leading-relaxed">
          O que levava dias de planejamento de campanhas e briefings agora é estruturado em minutos com as orientações do Squad.
        </p>
<div class="flex items-start gap-2.5 p-3.5 rounded-lg bg-surface-deep/70 border border-border-subtle text-body-sm text-on-surface">
<span class="text-primary font-bold">🎯 Foco:</span>
<span>Centralização de skills de marketing, criativos, tráfego e copy.</span>
</div>
</div>
<!-- Sector 2 -->
<div class="spotlight-card p-8 rounded-2xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-telemetry-cyan/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between mb-4">
<span class="font-label-mono-sm text-label-mono-sm text-telemetry-cyan bg-telemetry-cyan/10 px-3 py-1 rounded border border-telemetry-cyan/20">
            COMERCIAL &amp; VENDAS
          </span>
<span class="material-symbols-outlined text-outline group-hover:text-telemetry-cyan transition-colors" data-icon="handshake">handshake</span>
</div>
<h3 class="font-headline-md text-headline-md font-semibold text-on-surface mb-2">
          Prestadores de Serviços &amp; Consultores
        </h3>
<p class="font-body-md text-on-surface-variant mb-6 leading-relaxed">
          Propostas personalizadas criadas com o contexto real da empresa, acelerando o tempo de resposta e fechamento comercial.
        </p>
<div class="flex items-start gap-2.5 p-3.5 rounded-lg bg-surface-deep/70 border border-border-subtle text-body-sm text-on-surface">
<span class="text-telemetry-cyan font-bold">🎯 Foco:</span>
<span>Geração ágil de propostas e qualificação de clientes em tempo recorde.</span>
</div>
</div>
<!-- Sector 3 -->
<div class="spotlight-card p-8 rounded-2xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between mb-4">
<span class="font-label-mono-sm text-label-mono-sm text-primary bg-primary/10 px-3 py-1 rounded border border-primary/20">
            FINANCEIRO &amp; OPERAÇÕES
          </span>
<span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="account_balance">account_balance</span>
</div>
<h3 class="font-headline-md text-headline-md font-semibold text-on-surface mb-2">
          Pequenas Empresas &amp; Negócios Locais
        </h3>
<p class="font-body-md text-on-surface-variant mb-6 leading-relaxed">
          Visão clara das finanças, rotinas de cobrança estruturadas e documentação do negócio sem burocracia ou planilhas perdidas.
        </p>
<div class="flex items-start gap-2.5 p-3.5 rounded-lg bg-surface-deep/70 border border-border-subtle text-body-sm text-on-surface">
<span class="text-primary font-bold">🎯 Foco:</span>
<span>Organização do fluxo de caixa e padronização de processos diários.</span>
</div>
</div>
<!-- Sector 4 -->
<div class="spotlight-card p-8 rounded-2xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-telemetry-cyan/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between mb-4">
<span class="font-label-mono-sm text-label-mono-sm text-telemetry-cyan bg-telemetry-cyan/10 px-3 py-1 rounded border border-telemetry-cyan/20">
            GESTÃO &amp; ESTRATÉGIA
          </span>
<span class="material-symbols-outlined text-outline group-hover:text-telemetry-cyan transition-colors" data-icon="query_stats">query_stats</span>
</div>
<h3 class="font-headline-md text-headline-md font-semibold text-on-surface mb-2">
          Autônomos &amp; Novos Empreendedores
        </h3>
<p class="font-body-md text-on-surface-variant mb-6 leading-relaxed">
          Suporte diário de gerentes de inteligência para tomar decisões estratégicas com segurança e foco no que gera receita.
        </p>
<div class="flex items-start gap-2.5 p-3.5 rounded-lg bg-surface-deep/70 border border-border-subtle text-body-sm text-on-surface">
<span class="text-telemetry-cyan font-bold">🎯 Foco:</span>
<span>Jornada do zero para organizar e acelerar o crescimento do negócio.</span>
</div>
</div>
</div>
</section>
<!-- ================= SECTION: 4 GERENTES EXECUTIVOS & 60+ SKILLS ================= -->
<section class="py-20 px-6 max-w-7xl mx-auto border-t border-border-subtle/60" id="skills">
<div class="text-center max-w-3xl mx-auto mb-16 space-y-3 reveal-on-scroll">
<div class="font-label-mono-sm text-label-mono-sm text-primary tracking-widest uppercase">
        / skills.sys
      </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
        4 Gerentes Executivos. <br class="hidden sm:inline"/> 60+ Skills Corporativas.
      </h2>
<p class="font-body-md text-on-surface-variant">
        Sua IA assume o papel de líderes experientes, prontos para executar tarefas de alto nível nas 4 áreas vitais do seu negócio.
      </p>
</div>
<!-- 4 C-Level Executive Matrix -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Leader 1: CMO -->
<div class="spotlight-card p-7 rounded-2xl bg-surface-charcoal/70 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between pb-4 border-b border-border-subtle">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-[22px]" data-icon="ads_click">ads_click</span>
</div>
<div>
<span class="font-label-mono-sm text-[11px] text-outline">EXECUTIVE LEADER 01</span>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">
                Marketing &amp; Vendas
              </h3>
</div>
</div>
<span class="px-2.5 py-1 rounded bg-surface-elevated font-label-mono-sm text-xs text-primary border border-primary/20">
            CMO Squad
          </span>
</div>
<ul class="mt-6 space-y-3.5 font-body-md text-on-surface-variant">
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">01</span>
<span>Calendário de conteúdo e campanhas</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">02</span>
<span>Funil de vendas e scripts de abordagem</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">03</span>
<span>Propostas comerciais persuasivas</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">04</span>
<span>Análise de mercado e posicionamento</span>
</li>
</ul>
</div>
<!-- Leader 2: CFO -->
<div class="spotlight-card p-7 rounded-2xl bg-surface-charcoal/70 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between pb-4 border-b border-border-subtle">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-[22px]" data-icon="account_balance_wallet">account_balance_wallet</span>
</div>
<div>
<span class="font-label-mono-sm text-[11px] text-outline">EXECUTIVE LEADER 02</span>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">
                Financeiro &amp; Controle
              </h3>
</div>
</div>
<span class="px-2.5 py-1 rounded bg-surface-elevated font-label-mono-sm text-xs text-primary border border-primary/20">
            CFO Squad
          </span>
</div>
<ul class="mt-6 space-y-3.5 font-body-md text-on-surface-variant">
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">05</span>
<span>Fluxo de caixa inteligente</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">06</span>
<span>Precificação de produtos e serviços</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">07</span>
<span>Projeção de lucros e metas</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">08</span>
<span>Cobrança e recuperação de clientes</span>
</li>
</ul>
</div>
<!-- Leader 3: COO -->
<div class="spotlight-card p-7 rounded-2xl bg-surface-charcoal/70 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-telemetry-cyan/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between pb-4 border-b border-border-subtle">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-telemetry-cyan/10 border border-telemetry-cyan/30 flex items-center justify-center text-telemetry-cyan group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-[22px]" data-icon="alt_route">alt_route</span>
</div>
<div>
<span class="font-label-mono-sm text-[11px] text-outline">EXECUTIVE LEADER 03</span>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">
                Governança &amp; Processos
              </h3>
</div>
</div>
<span class="px-2.5 py-1 rounded bg-surface-elevated font-label-mono-sm text-xs text-telemetry-cyan border border-telemetry-cyan/20">
            COO Squad
          </span>
</div>
<ul class="mt-6 space-y-3.5 font-body-md text-on-surface-variant">
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-telemetry-cyan font-bold">09</span>
<span>Rotinas diárias e checklists operacionais</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-telemetry-cyan font-bold">10</span>
<span>Padronização de entregas e SLAs</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-telemetry-cyan font-bold">11</span>
<span>Gestão da jornada e suporte do cliente</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-telemetry-cyan font-bold">12</span>
<span>Onboarding de novos colaboradores</span>
</li>
</ul>
</div>
<!-- Leader 4: CEO -->
<div class="spotlight-card p-7 rounded-2xl bg-surface-charcoal/70 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between pb-4 border-b border-border-subtle">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-[22px]" data-icon="crown">crown</span>
</div>
<div>
<span class="font-label-mono-sm text-[11px] text-outline">EXECUTIVE LEADER 04</span>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">
                Gestão Estratégica
              </h3>
</div>
</div>
<span class="px-2.5 py-1 rounded bg-surface-elevated font-label-mono-sm text-xs text-primary border border-primary/20">
            CEO Squad
          </span>
</div>
<ul class="mt-6 space-y-3.5 font-body-md text-on-surface-variant">
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">13</span>
<span>Diagnóstico e contexto do negócio</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">14</span>
<span>Definição de OKRs e métricas principais</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">15</span>
<span>Estratégia de crescimento sustentável</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">16</span>
<span>Reuniões de alinhamento com a IA</span>
</li>
</ul>
</div>
</div>
</section>
<!-- ================= SECTION: OFERTA IRRECUSÁVEL & VALOR ================= -->
<section class="py-24 px-6 max-w-5xl mx-auto" id="oferta">
<div class="text-center max-w-2xl mx-auto mb-12 space-y-3 reveal-on-scroll">
<div class="font-label-mono-sm text-label-mono-sm text-primary tracking-widest uppercase">
        acesso.sys
      </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
        Acesso Imediato ao Sistema Completo
      </h2>
<p class="font-body-md text-on-surface-variant">
        Uma fração microscópica do custo de uma equipe executiva tradicional.
      </p>
</div>
<!-- Comparative Anchor Pill -->
<div class="max-w-2xl mx-auto mb-8 p-4 rounded-xl bg-surface-charcoal/50 border border-border-subtle flex flex-col sm:flex-row items-center justify-around gap-4 text-center sm:text-left font-label-mono-sm text-xs reveal-on-scroll">
<div class="text-outline">
<span>Contratar uma diretoria:</span>
<strong class="text-error block text-sm">R\$ 25.000/mês</strong>
</div>
<div class="w-px h-8 bg-border-subtle hidden sm:block"></div>
<div class="text-outline">
<span>Pagar 12 ferramentas soltas:</span>
<strong class="text-error block text-sm">R\$ 1.500/mês</strong>
</div>
<div class="w-px h-8 bg-border-subtle hidden sm:block"></div>
<div class="text-primary font-medium">
<span>Win OS vitalício:</span>
<strong class="text-primary text-base block font-bold">R\$ 47 único</strong>
</div>
</div>
<!-- The Flagship Executive Glass Card -->
<div class="rounded-3xl bg-surface-charcoal/80 border-2 border-primary/50 backdrop-blur-2xl p-8 md:p-12 shadow-2xl offer-glow-card relative overflow-hidden reveal-on-scroll">
<!-- Glow ambient -->
<div class="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
<div class="text-center pb-8 border-b border-border-subtle space-y-3">
<span class="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-label-mono-sm text-xs tracking-wider uppercase font-semibold">
          SYSTEM CORE: ENTERPRISE LIFETIME
        </span>
<div class="flex items-center justify-center gap-2">
<span class="font-headline-hero text-headline-hero font-extrabold text-primary">
            R\$ 47
          </span>
</div>
<p class="font-body-md text-on-surface-variant">
          Pagamento único. Acesso vitalício. O sistema completo.
        </p>
</div>
<!-- Itemized Stack Breakdown -->
<div class="py-8 space-y-4 font-body-md border-b border-border-subtle">
<div class="text-xs font-label-mono-sm text-outline tracking-wider uppercase pb-2">
          O que você leva hoje:
        </div>
<div class="flex items-center justify-between py-1.5 border-b border-white/5">
<div class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
<span class="text-on-surface">Estrutura Completa de Diretórios Win OS</span>
</div>
<span class="font-label-mono-sm text-xs text-outline line-through">R\$ 297</span>
</div>
<div class="flex items-center justify-between py-1.5 border-b border-white/5">
<div class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
<span class="text-on-surface">60+ Skills Corporativas e Prompts Prontos</span>
</div>
<span class="font-label-mono-sm text-xs text-outline line-through">R\$ 497</span>
</div>
<div class="flex items-center justify-between py-1.5 border-b border-white/5">
<div class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
<span class="text-on-surface">Framework de 4 Gerentes Executivos</span>
</div>
<span class="font-label-mono-sm text-xs text-outline line-through">R\$ 297</span>
</div>
<div class="flex items-center justify-between py-1.5 border-b border-white/5">
<div class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
<span class="text-on-surface">Acesso Vitalício + Atualizações</span>
</div>
<span class="font-label-mono-sm text-xs text-outline line-through">R\$ 197</span>
</div>
<!-- Bonus row -->
<div class="flex items-center justify-between py-1.5 text-primary">
<div class="flex items-center gap-2.5 font-medium">
<span class="material-symbols-outlined text-telemetry-cyan text-[20px]" data-icon="stars">stars</span>
<span class="text-primary-fixed">BÔNUS: Comunidade de Empresários com IA</span>
</div>
<span class="font-label-mono-sm text-xs text-telemetry-cyan uppercase">Incluso</span>
</div>
</div>
<!-- Financial Calculation Bar -->
<div class="pt-6 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-label-mono-sm">
<div class="text-outline text-sm">
          Valor Total do Sistema: <span class="line-through text-outline-variant font-bold">R\$ 1.288</span>
</div>
<div class="text-right">
<span class="text-xs text-on-surface-variant block">Hoje você paga apenas:</span>
<span class="text-2xl font-bold text-primary">R\$ 47</span>
</div>
</div>
<!-- Conversion Button -->
<div class="space-y-4 text-center">
<a class="cta-sheen w-full gold-gradient-bg text-on-primary font-headline-md text-headline-md font-bold py-5 px-8 rounded-xl shadow-[0_0_36px_rgba(229,184,66,0.35)] hover:shadow-[0_0_50px_rgba(229,184,66,0.6)] transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 group" href="https://pay.kiwify.com.br/lYkLOmo" rel="noopener noreferrer" target="_blank">
<span>Quero acessar o Win OS por R\$47</span>
<span class="material-symbols-outlined text-[24px] transition-transform duration-200 group-hover:translate-x-1.5" data-icon="arrow_forward">arrow_forward</span>
</a>
<div class="flex items-center justify-center gap-3 font-label-mono-sm text-xs text-on-surface-variant">
<span class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px] text-primary" data-icon="lock">lock</span>
            Pagamento seguro via Pix ou Cartão
          </span>
<span>·</span>
<span>Acesso imediato ao sistema</span>
</div>
</div>
<!-- Guarantee Seal -->
<div class="mt-8 p-5 rounded-xl bg-surface-deep/60 border border-border-subtle flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
<div class="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
<span class="material-symbols-outlined text-[26px]" data-icon="verified">verified</span>
</div>
<div>
<h4 class="font-headline-sm text-body-md font-semibold text-on-surface">
            Garantia Incondicional de 7 Dias
          </h4>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Experimente o Win OS por 7 dias. Se por qualquer motivo achar que não valeu a pena, basta pedir o reembolso e devolvemos 100% do seu dinheiro, sem perguntas.
          </p>
</div>
</div>
</div>
</section>
<!-- ================= SECTION: COMUNIDADE ================= -->
<section class="py-16 px-6 max-w-7xl mx-auto border-t border-border-subtle/60">
<div class="spotlight-card p-8 md:p-12 rounded-2xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden reveal-on-scroll">
<div class="space-y-3 max-w-2xl">
<div class="font-label-mono-sm text-label-mono-sm text-primary tracking-widest uppercase">
          / comunidade.sys
        </div>
<div class="inline-block px-3 py-1 rounded bg-telemetry-cyan/10 text-telemetry-cyan border border-telemetry-cyan/25 font-label-mono-sm text-xs">
          Acesso incluso na sua licença vitalícia
        </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
          Junte-se a empresários e agências que operam com IA
        </h2>
<p class="font-body-md text-on-surface-variant leading-relaxed">
          Troque prompts, receba novas skills operacionais, tire dúvidas e acompanhe atualizações contínuas do sistema direto com os criadores.
        </p>
</div>
<div class="shrink-0 w-full md:w-auto">
<a class="cta-sheen w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-primary/50 text-primary font-headline-sm text-body-sm font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-200 group" href="https://pay.kiwify.com.br/lYkLOmo" rel="noopener noreferrer" target="_blank">
<span>Garantir meu acesso com comunidade</span>
<span class="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-icon="north_east">north_east</span>
</a>
</div>
</div>
</section>
<!-- ================= SECTION: FAQ ================= -->
<section class="py-20 px-6 max-w-4xl mx-auto" id="faq">
<div class="text-center max-w-2xl mx-auto mb-16 space-y-3 reveal-on-scroll">
<div class="font-label-mono-sm text-label-mono-sm text-primary tracking-widest uppercase">
        / duvidas.sys
      </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
        Perguntas frequentes
      </h2>
<p class="font-body-md text-on-surface-variant">
        Tudo o que você precisa saber antes de implantar o Win OS no seu negócio.
      </p>
</div>
<div class="space-y-4" id="faq-container">
<!-- FAQ 1 (Default Open) -->
<div class="spotlight-card p-6 rounded-xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-md transition-all duration-200 reveal-on-scroll">
<button class="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm font-semibold text-on-surface focus:outline-none cursor-pointer" onclick="toggleFaq(this)">
<span>Preciso entender de tecnologia para usar o Win OS?</span>
<span class="material-symbols-outlined text-primary text-[22px] transition-transform duration-300 transform rotate-180" data-icon="expand_more">expand_more</span>
</button>
<div class="faq-content overflow-hidden transition-all duration-300 max-h-96 opacity-100">
<div class="mt-3 text-body-md text-on-surface-variant leading-relaxed border-t border-border-subtle pt-3">
          Não. O Win OS foi feito para quem nunca organizou uma empresa em sistema nenhum. A estrutura já vem pronta, você só preenche com os dados básicos do seu negócio e pluga nas ferramentas que já usa.
        </div>
</div>
</div>
<!-- FAQ 2 -->
<div class="spotlight-card p-6 rounded-xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-md transition-all duration-200 reveal-on-scroll">
<button class="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm font-semibold text-on-surface focus:outline-none cursor-pointer" onclick="toggleFaq(this)">
<span>Minha empresa ainda não existe formalmente, consigo usar?</span>
<span class="material-symbols-outlined text-primary text-[22px] transition-transform duration-300 transform rotate-0" data-icon="expand_more">expand_more</span>
</button>
<div class="faq-content overflow-hidden transition-all duration-300 max-h-0 opacity-0">
<div class="mt-3 text-body-md text-on-surface-variant leading-relaxed border-t border-border-subtle pt-3">
          Sim, perfeitamente. O módulo INICIAR foi desenhado exatamente para estruturar um negócio desde o primeiro dia com processos consolidados, economizando meses de tentativas e erros.
        </div>
</div>
</div>
<!-- FAQ 3 -->
<div class="spotlight-card p-6 rounded-xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-md transition-all duration-200 reveal-on-scroll">
<button class="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm font-semibold text-on-surface focus:outline-none cursor-pointer" onclick="toggleFaq(this)">
<span>Tenho um negócio físico, o Win OS serve para mim?</span>
<span class="material-symbols-outlined text-primary text-[22px] transition-transform duration-300 transform rotate-0" data-icon="expand_more">expand_more</span>
</button>
<div class="faq-content overflow-hidden transition-all duration-300 max-h-0 opacity-0">
<div class="mt-3 text-body-md text-on-surface-variant leading-relaxed border-t border-border-subtle pt-3">
          Com certeza. Restaurantes, clínicas, lojas físicas e oficinas usam o Win OS para padronizar rotinas de atendimento, controle de caixa e estratégias locais de aquisição de novos clientes.
        </div>
</div>
</div>
<!-- FAQ 4 -->
<div class="spotlight-card p-6 rounded-xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-md transition-all duration-200 reveal-on-scroll">
<button class="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm font-semibold text-on-surface focus:outline-none cursor-pointer" onclick="toggleFaq(this)">
<span>Quanto tempo leva para configurar tudo?</span>
<span class="material-symbols-outlined text-primary text-[22px] transition-transform duration-300 transform rotate-0" data-icon="expand_more">expand_more</span>
</button>
<div class="faq-content overflow-hidden transition-all duration-300 max-h-0 opacity-0">
<div class="mt-3 text-body-md text-on-surface-variant leading-relaxed border-t border-border-subtle pt-3">
          Aproximadamente 15 minutos. A arquitetura de diretórios e todas as 60+ skills já vêm pré-construídas. Basta seguir o checklist guiado de boas-vindas.
        </div>
</div>
</div>
<!-- FAQ 5 -->
<div class="spotlight-card p-6 rounded-xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-md transition-all duration-200 reveal-on-scroll">
<button class="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm font-semibold text-on-surface focus:outline-none cursor-pointer" onclick="toggleFaq(this)">
<span>E se eu já uso outras ferramentas na minha empresa?</span>
<span class="material-symbols-outlined text-primary text-[22px] transition-transform duration-300 transform rotate-0" data-icon="expand_more">expand_more</span>
</button>
<div class="faq-content overflow-hidden transition-all duration-300 max-h-0 opacity-0">
<div class="mt-3 text-body-md text-on-surface-variant leading-relaxed border-t border-border-subtle pt-3">
          O Win OS não substitui forçadamente suas ferramentas existentes — ele atua como o cérebro central unificador. Você integra as saídas do seu CRM ou planilhas diretamente no contexto dos diretórios.
        </div>
</div>
</div>
</div>
</section>
<!-- ================= FINAL CTA ENCERRAMENTO ================= -->
<section class="py-20 px-6 max-w-5xl mx-auto text-center">
<div class="p-10 md:p-16 rounded-3xl bg-surface-charcoal/80 border border-primary/30 backdrop-blur-2xl offer-glow-card relative overflow-hidden space-y-6 reveal-on-scroll">
<div class="font-label-mono-sm text-label-mono-sm text-primary tracking-widest uppercase">
        / encerramento.sys
      </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
        Pronto para organizar sua empresa com IA?
      </h2>
<p class="font-body-md text-on-surface-variant max-w-xl mx-auto">
        Junte-se à nova classe de empresários que comandam operações lucrativas sem sobrecarga operacional.
      </p>
<div class="pt-4">
<a class="cta-sheen inline-flex gold-gradient-bg text-on-primary font-headline-md text-headline-md font-bold px-10 py-5 rounded-xl shadow-[0_0_35px_rgba(229,184,66,0.35)] hover:shadow-[0_0_55px_rgba(229,184,66,0.65)] transition-all duration-200 active:scale-95 items-center gap-3 group" href="https://pay.kiwify.com.br/lYkLOmo" rel="noopener noreferrer" target="_blank">
<span>Quero acessar o Win OS por R\$47</span>
<span class="material-symbols-outlined text-[24px] transition-transform duration-200 group-hover:translate-x-1.5" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
<div class="font-label-mono-sm text-xs text-outline pt-2">
        Win OS — Sistema Operacional de IA para Negócios Reais
      </div>
</div>
</section>
<!-- ================= FOOTER (Shared Component: Footer) ================= -->
<footer class="bg-surface-deep dark:bg-surface-deep text-primary dark:text-primary full-width bottom border-t border-border-subtle dark:border-border-subtle">
<div class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 py-12 w-full gap-6">
<!-- Brand & Description -->
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-surface-elevated flex items-center justify-center p-1 border border-border-subtle">
<img alt="Win OS Logo" class="w-6 h-6 object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1V28-_pLfpyTRMgwSUH6bYyL9t4v0vSncV2Y6iwVzpAXwyv0CA4Xf4aP04CCW87PD7jyanaQjFnuEK9HPQd72hwGmbH3-dyIhQ3YenwiLcR4xLIRhUH_DLcvn2sCv6JpBomJvwnQ1NV5qoDn4HRxvheFkDjsH9LY8k3-uRNc7A_6gRKhvPUCuO7NezGvaaunapzEp0GUGzoLwuGWkHgZqgoVwa3Hs4oz8TdpFMrR-g1NFkXKcUq7ylfEDQN"/>
</div>
<div>
<span class="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary">
            Win OS
          </span>
<p class="font-body-sm text-body-sm text-on-surface-variant">
            Desenvolvido por Creative Agência e Tecnologia
          </p>
</div>
</div>
<!-- Links Cluster -->
<div class="flex flex-wrap items-center justify-center gap-6">
<a class="text-on-surface-variant dark:text-on-surface-variant font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#">
          Privacy Protocol
        </a>
<a class="text-on-surface-variant dark:text-on-surface-variant font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#">
          Terms of Operations
        </a>
<a class="text-on-surface-variant dark:text-on-surface-variant font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#">
          Telemetry API
        </a>
<a class="text-primary dark:text-primary font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#">
          System Status
        </a>
<a class="text-on-surface-variant dark:text-on-surface-variant font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#">
          Security Whitepaper
        </a>
</div>
<!-- Copyright -->
<div class="font-label-mono-sm text-label-mono-sm text-outline text-center md:text-right">
        © 2026 Win OS · Creative Marketing. Todos os direitos reservados.
      </div>
</div>
</footer>
</div>
<!-- Complete Interactivity & Motion Graphics Suite JavaScript -->

`;

  return (
    <>
      <Script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" strategy="beforeInteractive" />
      <Script id="tailwind-config" strategy="beforeInteractive">
        {`tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          "colors": {
            "on-secondary": "#00363d",
            "surface-container-low": "#181c24",
            "on-primary": "#3e2e00",
            "surface-elevated": "#1A2234",
            "surface-deep": "#080B10",
            "error": "#ffb4ab",
            "outline-variant": "#4e4635",
            "outline": "#9a907c",
            "gold-glow": "rgba(229, 184, 66, 0.18)",
            "border-subtle": "#1E293B",
            "on-tertiary-fixed": "#001e2c",
            "tertiary": "#afe0ff",
            "on-primary-container": "#614900",
            "tertiary-container": "#5ec9ff",
            "gold-deep": "#D4AF37",
            "inverse-primary": "#775a00",
            "on-error-container": "#ffdad6",
            "gold-burnished": "#C9A24B",
            "surface-variant": "#31353e",
            "on-tertiary-fixed-variant": "#004c69",
            "on-secondary-fixed-variant": "#004f58",
            "tertiary-fixed": "#c4e7ff",
            "inverse-surface": "#dfe2ee",
            "secondary-fixed": "#9cf0ff",
            "secondary": "#bdf4ff",
            "background": "#0f131c",
            "primary-fixed-dim": "#eec14a",
            "surface-container-lowest": "#0a0e16",
            "surface": "#0f131c",
            "on-tertiary-container": "#005371",
            "telemetry-cyan-glow": "rgba(0, 229, 255, 0.15)",
            "surface-container": "#1c2028",
            "on-surface-variant": "#d1c5af",
            "on-error": "#690005",
            "on-secondary-fixed": "#001f24",
            "on-tertiary": "#00354a",
            "surface-tint": "#eec14a",
            "surface-charcoal": "#111827",
            "tertiary-fixed-dim": "#7bd0ff",
            "primary-container": "#e5b842",
            "surface-dim": "#0f131c",
            "on-primary-fixed-variant": "#5a4400",
            "primary": "#ffd56d",
            "on-background": "#dfe2ee",
            "surface-container-high": "#262a33",
            "surface-bright": "#353942",
            "secondary-fixed-dim": "#00daf3",
            "error-container": "#93000a",
            "on-secondary-container": "#00616d",
            "on-surface": "#dfe2ee",
            "secondary-container": "#00e3fd",
            "on-primary-fixed": "#251a00",
            "surface-container-highest": "#31353e",
            "primary-fixed": "#ffdf97",
            "inverse-on-surface": "#2c3039",
            "gold-light": "#F3C64F",
            "telemetry-cyan": "#00E5FF"
          },
          "borderRadius": {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
          },
          "spacing": {
            "space-sm": "0.5rem",
            "space-xl": "2.5rem",
            "space-md": "1rem",
            "gutter-sm": "1rem",
            "margin-mobile": "1rem",
            "space-xs": "0.25rem",
            "space-lg": "1.5rem",
            "gutter": "1.5rem",
            "margin": "2rem"
          },
          "fontFamily": {
            "label-mono-sm": ["JetBrains Mono"],
            "headline-hero": ["Plus Jakarta Sans"],
            "label-mono-lg": ["JetBrains Mono"],
            "body-md": ["Inter"],
            "body-lg": ["Inter"],
            "headline-lg-mobile": ["Plus Jakarta Sans"],
            "body-sm": ["Inter"],
            "headline-sm": ["Plus Jakarta Sans"],
            "headline-md": ["Plus Jakarta Sans"],
            "headline-lg": ["Plus Jakarta Sans"],
            "headline-hero-mobile": ["Plus Jakarta Sans"]
          },
          "fontSize": {
            "label-mono-sm": ["11px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500" }],
            "headline-hero": ["56px", { "lineHeight": "64px", "letterSpacing": "-0.03em", "fontWeight": "700" }],
            "label-mono-lg": ["14px", { "lineHeight": "20px", "letterSpacing": "0.02em", "fontWeight": "500" }],
            "body-md": ["15px", { "lineHeight": "24px", "fontWeight": "400" }],
            "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
            "headline-lg-mobile": ["28px", { "lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
            "body-sm": ["13px", { "lineHeight": "20px", "fontWeight": "400" }],
            "headline-sm": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
            "headline-md": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
            "headline-lg": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "600" }],
            "headline-hero-mobile": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
          }
        }
      }
    }
  </script>
<style>
    /* Executive Glow Effects & Custom Utilities */
    .gold-gradient-bg {
      background: linear-gradient(135deg, #F3C64F 0%, #E5B842 50%, #C9A24B 100%);
    }
    .gold-gradient-text {
      background: linear-gradient(135deg, #FFF0B8 0%, #F3C64F 40%, #E5B842 70%, #C9A24B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .gold-card-sheen {
      border-top: 1px solid rgba(229, 184, 66, 0.45);
    }
    .cyan-card-sheen {
      border-top: 1px solid rgba(0, 229, 255, 0.4);
    }
    .executive-card-glow {
      box-shadow: 0 0 35px rgba(229, 184, 66, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.08);
    }
    .terminal-scrollbar::-webkit-scrollbar {
      width: 4px;
    }
    .terminal-scrollbar::-webkit-scrollbar-track {
      background: rgba(15, 19, 28, 0.8);
    }
    .terminal-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(229, 184, 66, 0.25);
      border-radius: 4px;
    }

    /* Cyber Background Grid */
    .cyber-grid-overlay {
      background-size: 40px 40px;
      background-image: 
        linear-gradient(to right, rgba(229, 184, 66, 0.04) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229, 184, 66, 0.04) 1px, transparent 1px);
      mask-image: radial-gradient(circle at 50% 25%, black 40%, transparent 80%);
      -webkit-mask-image: radial-gradient(circle at 50% 25%, black 40%, transparent 80%);
    }

    /* Floating Ambient Glow Orbs */
    @keyframes orbFloatA {
      0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.22; }
      50% { transform: translate(30px, -45px) scale(1.12); opacity: 0.35; }
    }
    @keyframes orbFloatB {
      0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.18; }
      50% { transform: translate(-35px, 40px) scale(1.15); opacity: 0.28; }
    }
    .ambient-orb-gold {
      animation: orbFloatA 14s ease-in-out infinite alternate;
    }
    .ambient-orb-cyan {
      animation: orbFloatB 18s ease-in-out infinite alternate;
    }

    /* Living Terminal Laser Scanner Line */
    @keyframes laserScan {
      0% { top: 0%; opacity: 0; }
      15% { opacity: 0.85; }
      85% { opacity: 0.85; }
      100% { top: 98%; opacity: 0; }
    }
    .laser-scanner-beam {
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent 0%, rgba(0, 229, 255, 0.8) 25%, rgba(243, 198, 79, 1) 50%, rgba(0, 229, 255, 0.8) 75%, transparent 100%);
      box-shadow: 0 0 16px rgba(0, 229, 255, 0.8), 0 0 8px rgba(243, 198, 79, 0.8);
      pointer-events: none;
      z-index: 20;
      animation: laserScan 6.5s ease-in-out infinite;
    }

    /* Breathing Status Ring */
    @keyframes ringPulse {
      0% { transform: scale(0.95); opacity: 0.8; box-shadow: 0 0 0 0 rgba(0, 229, 255, 0.6); }
      70% { transform: scale(1.15); opacity: 0; box-shadow: 0 0 0 8px rgba(0, 229, 255, 0); }
      100% { transform: scale(0.95); opacity: 0; }
    }
    .pulsing-ring {
      animation: ringPulse 2.4s infinite cubic-bezier(0.45, 0, 0.2, 1);
    }

    /* Spotlight interactive card effect */
    .spotlight-card {
      position: relative;
      isolation: isolate;
      transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease;
    }
    .spotlight-card::before {
      content: '';
      position: absolute;
      inset: -1px;
      border-radius: inherit;
      background: radial-gradient(550px circle at var(--mouse-x, -200px) var(--mouse-y, -200px), rgba(243, 198, 79, 0.16), transparent 50%);
      pointer-events: none;
      z-index: -1;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .spotlight-card:hover::before {
      opacity: 1;
    }

    /* Metallic CTA Light Sheen Sweep */
    .cta-sheen {
      position: relative;
      overflow: hidden;
    }
    .cta-sheen::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -60%;
      width: 40%;
      height: 200%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.45) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: rotate(25deg);
      pointer-events: none;
      animation: sheenPass 4.5s ease-in-out infinite;
    }
    @keyframes sheenPass {
      0%, 65% { transform: translateX(0%) rotate(25deg); }
      100% { transform: translateX(450%) rotate(25deg); }
    }

    /* Offer Flagship Card Border Glow Pulse */
    @keyframes offerGlowPulse {
      0%, 100% { box-shadow: 0 0 30px rgba(229, 184, 66, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1); }
      50% { box-shadow: 0 0 55px rgba(229, 184, 66, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2); }
    }
    .offer-glow-card {
      animation: offerGlowPulse 5s ease-in-out infinite;
    }

    /* Scroll Reveal Transition Utility */
    .reveal-on-scroll {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-on-scroll.is-revealed {
      opacity: 1;
      transform: translateY(0);
    }

    /* Accessibility / reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .ambient-orb-gold,
      .ambient-orb-cyan,
      .laser-scanner-beam,
      .pulsing-ring,
      .cta-sheen::after,
      .offer-glow-card {
        animation: none !important;
      }
      .reveal-on-scroll {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
      .laser-scanner-beam {
        display: none;
      }
    }
  </style>
</head>
<body class="bg-surface-deep text-on-surface antialiased selection:bg-primary selection:text-on-primary font-body-md overflow-x-hidden min-h-screen relative">
<!-- ================= ATMOSPHERIC AMBIENT GLOW & CYBER GRID ================= -->
<div class="fixed inset-0 cyber-grid-overlay pointer-events-none z-0"></div>
<div class="fixed top-12 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0 ambient-orb-gold"></div>
<div class="fixed top-1/3 left-10 w-[420px] h-[360px] bg-telemetry-cyan/10 rounded-full blur-[130px] pointer-events-none z-0 ambient-orb-cyan"></div>
<div class="fixed bottom-24 right-10 w-[500px] h-[400px] bg-primary/8 rounded-full blur-[150px] pointer-events-none z-0 ambient-orb-gold" style="animation-delay: -7s;"></div>
<div class="relative z-10">
<!-- ================= TOP APP BAR (Shared Component: TopNavBar) ================= -->
<header class="bg-surface-deep/80 dark:bg-surface-deep/80 backdrop-blur-md text-primary dark:text-primary docked full-width top-0 sticky z-50 shadow-none border-b border-border-subtle dark:border-border-subtle">
<div class="flex justify-between items-center max-w-7xl mx-auto px-6 py-4 w-full">
<!-- Brand Anchor -->
<a class="flex items-center gap-3 group" href="#">
<div class="relative w-9 h-9 flex items-center justify-center p-1 rounded-lg bg-surface-elevated/80 border border-primary/30 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(229,184,66,0.35)] transition-all">
<img alt="Win OS Logo" class="w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(229,184,66,0.5)] transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AEtjO1V28-_pLfpyTRMgwSUH6bYyL9t4v0vSncV2Y6iwVzpAXwyv0CA4Xf4aP04CCW87PD7jyanaQjFnuEK9HPQd72hwGmbH3-dyIhQ3YenwiLcR4xLIRhUH_DLcvn2sCv6JpBomJvwnQ1NV5qoDn4HRxvheFkDjsH9LY8k3-uRNc7A_6gRKhvPUCuO7NezGvaaunapzEp0GUGzoLwuGWkHgZqgoVwa3Hs4oz8TdpFMrR-g1NFkXKcUq7ylfEDQN"/>
</div>
<div class="flex flex-col">
<span class="font-headline-sm text-headline-sm font-bold tracking-tight text-primary dark:text-primary flex items-center gap-1.5">
            Win OS
            <span class="relative flex h-2 w-2 items-center justify-center">
<span class="absolute inline-flex h-full w-full rounded-full bg-telemetry-cyan pulsing-ring"></span>
<span class="relative inline-block w-1.5 h-1.5 rounded-full bg-telemetry-cyan"></span>
</span>
</span>
<span class="font-label-mono-sm text-[9px] text-on-surface-variant tracking-wider uppercase opacity-75">SISTEMA OPERACIONAL DE IA</span>
</div>
</a>
<!-- Web Nav Links -->
<nav class="hidden md:flex items-center gap-8">
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface transition-colors font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-all duration-150" href="#negocio">Estrutura</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface transition-colors font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-all duration-150" href="#jornadas">Funcionalidades</a>
<a class="text-primary dark:text-primary border-b-2 border-primary dark:border-primary pb-1 font-label-mono-sm text-label-mono-sm" href="#skills">Diretoria</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface transition-colors font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-all duration-150" href="#oferta">Preço</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface transition-colors font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-all duration-150" href="#faq">Dúvidas</a>
</nav>
<!-- Trailing Action Cluster -->
<div class="flex items-center gap-3">
<a class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border-subtle bg-surface-charcoal/60 text-on-surface font-label-mono-sm text-label-mono-sm hover:border-telemetry-cyan/60 hover:shadow-[0_0_12px_rgba(0,229,255,0.2)] transition-all duration-150" href="#oferta">
<span class="w-1.5 h-1.5 rounded-full bg-telemetry-cyan"></span>Falar no WhatsApp</a>
<a class="cta-sheen gold-gradient-bg text-on-primary font-headline-sm text-body-sm font-semibold px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(229,184,66,0.25)] hover:shadow-[0_0_28px_rgba(229,184,66,0.45)] transition-all duration-150 active:scale-95 flex items-center gap-2" href="https://pay.kiwify.com.br/lYkLOmo" rel="noopener noreferrer" target="_blank">
<span>Acessar Sistema</span>
<span class="font-label-mono-sm text-[11px] bg-black/20 px-1.5 py-0.5 rounded text-surface-deep font-bold">R\$ 47</span>
</a>
</div>
</div>
</header>
<!-- ================= HERO SECTION ================= -->
<section class="relative pt-12 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
<div class="text-center max-w-4xl mx-auto space-y-6 reveal-on-scroll">
<!-- High-Tech Badge -->
<div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-elevated/70 border border-primary/30 backdrop-blur-md hover:border-primary/60 transition-colors">
<span class="relative flex h-2 w-2 items-center justify-center">
<span class="absolute inline-flex h-full w-full rounded-full bg-telemetry-cyan pulsing-ring"></span>
<span class="relative inline-block w-2 h-2 rounded-full bg-telemetry-cyan"></span>
</span>
<span class="font-label-mono-sm text-label-mono-sm text-primary tracking-wider">
          A ESTRUTURA DEFINITIVA // SUA EMPRESA COM IA
        </span>
</div>
<!-- Main Headline -->
<h1 class="hidden md:block font-headline-hero text-headline-hero text-on-surface font-extrabold tracking-tight">
        Sua empresa pronta para <br/>
<span class="gold-gradient-text">a sua IA favorita trabalhar.</span>
</h1>
<h1 class="block md:hidden font-headline-hero-mobile text-headline-hero-mobile text-on-surface font-bold tracking-tight">
        Sua empresa pronta para <br/>
<span class="gold-gradient-text">a sua IA favorita trabalhar.</span>
</h1>
<!-- Subheadline -->
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
        O Win OS não é mais uma IA solta. É a estrutura de pastas, processos e dezenas de skills prontas para você conectar no <strong class="text-primary font-medium">ChatGPT</strong>, <strong class="text-primary font-medium">Claude</strong> ou <strong class="text-primary font-medium">Gemini</strong> e ter uma diretoria completa trabalhando pelo seu negócio.
      </p>
<!-- CTA Stack -->
<div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
<a class="cta-sheen w-full sm:w-auto gold-gradient-bg text-on-primary font-headline-sm text-headline-sm font-bold px-8 py-4 rounded-xl shadow-[0_0_32px_rgba(229,184,66,0.35)] hover:shadow-[0_0_45px_rgba(229,184,66,0.6)] transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 group" href="https://pay.kiwify.com.br/lYkLOmo" rel="noopener noreferrer" target="_blank">
<span>Quero organizar minha empresa</span>
<span class="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
<!-- Trust Meta Bar -->
<div class="flex flex-wrap items-center justify-center gap-6 pt-3 text-on-surface-variant font-label-mono-sm text-label-mono-sm opacity-80">
<span class="flex items-center gap-1.5 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-primary text-[16px]" data-icon="check_circle">check_circle</span>
          Acesso vitalício imediato
        </span>
<span class="flex items-center gap-1.5 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-primary text-[16px]" data-icon="verified_user">verified_user</span>
          Garantia incondicional de 7 dias
        </span>
<span class="flex items-center gap-1.5 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-primary text-[16px]" data-icon="bolt">bolt</span>
          Setup em 15 minutos
        </span>
</div>
<div class="pt-1 text-xs text-outline font-label-mono-sm tracking-wider uppercase">
        A nova evolução do empreendedorismo, para negócios reais
      </div>
</div>
<!-- ================= INTERACTIVE VISUAL TELEMETRY SANDBOX ================= -->
<div class="mt-14 max-w-5xl mx-auto rounded-2xl bg-surface-charcoal/80 border border-white/10 backdrop-blur-2xl shadow-2xl p-1 md:p-2 executive-card-glow relative overflow-hidden reveal-on-scroll" id="negocio">
<!-- Laser Scanner Beam -->
<div class="laser-scanner-beam"></div>
<!-- Glow Accents -->
<div class="absolute -top-1 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent"></div>
<!-- Window Controls Header -->
<div class="flex items-center justify-between px-4 py-3 border-b border-border-subtle bg-surface-deep/60 rounded-t-xl">
<div class="flex items-center gap-2">
<div class="w-3 h-3 rounded-full bg-error/80 border border-error"></div>
<div class="w-3 h-3 rounded-full bg-primary/80 border border-primary"></div>
<div class="w-3 h-3 rounded-full bg-telemetry-cyan/80 border border-telemetry-cyan"></div>
<span class="ml-3 font-label-mono-sm text-label-mono-sm text-on-surface-variant flex items-center gap-2">
<span class="text-primary font-bold">win-os</span> — minha-empresa
          </span>
</div>
<div class="flex items-center gap-2 font-label-mono-sm text-label-mono-sm text-telemetry-cyan bg-telemetry-cyan/10 px-2.5 py-1 rounded border border-telemetry-cyan/25 shadow-[0_0_12px_rgba(0,229,255,0.15)]">
<span class="relative flex h-2 w-2 items-center justify-center">
<span class="absolute inline-flex h-full w-full rounded-full bg-telemetry-cyan pulsing-ring"></span>
<span class="relative inline-block w-1.5 h-1.5 rounded-full bg-telemetry-cyan"></span>
</span>
<span class="font-semibold tracking-wide">IA CONECTADA // KERNEL v2.4</span>
</div>
</div>
<!-- Sandbox Body Split: File Tree & Executed Intelligence -->
<div class="grid grid-cols-1 md:grid-cols-12 min-h-[380px] divide-y md:divide-y-0 md:divide-x divide-border-subtle">
<!-- Left: Tree Directory -->
<div class="md:col-span-4 p-5 bg-surface-deep/40 font-label-mono-sm text-body-sm space-y-4">
<div class="flex items-center justify-between text-xs text-on-surface-variant tracking-wider uppercase pb-1 border-b border-white/5">
<span>DIRETÓRIO DA EMPRESA</span>
<span class="text-primary font-semibold flex items-center gap-1.5">
<span class="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
  6 NÓS ATIVOS
</span>
</div>
<div class="space-y-2.5 terminal-scrollbar overflow-y-auto max-h-[300px] pr-2">
<!-- Item 1: Negócio Active -->
<div class="p-2 rounded bg-surface-elevated/70 border border-primary/40 shadow-[0_0_15px_rgba(229,184,66,0.15)]">
<div class="flex items-center gap-2 text-primary font-medium">
<span class="material-symbols-outlined text-[16px]" data-icon="folder_open">folder_open</span>
<span>▸ negócio</span>
</div>
<div class="pl-6 pt-1.5 space-y-1 text-xs text-on-surface-variant">
<p class="flex items-center gap-1.5 text-primary font-medium">
<span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> contexto-do-negocio.md
                </p>
<p class="flex items-center gap-1.5 hover:text-on-surface transition-colors cursor-pointer">
<span class="w-1 h-1 rounded-full bg-outline"></span> objetivos.md
                </p>
</div>
</div>
<!-- Item 2: Financeiro -->
<div class="p-2 rounded hover:bg-surface-elevated/40 transition-colors cursor-pointer group/node">
<div class="flex items-center gap-2 text-on-surface font-medium group-hover/node:text-telemetry-cyan transition-colors">
<span class="material-symbols-outlined text-[16px] text-telemetry-cyan" data-icon="folder">folder</span>
<span>▸ financeiro</span>
</div>
<div class="pl-6 pt-1 space-y-1 text-xs text-on-surface-variant">
<p class="hover:text-primary transition-colors cursor-pointer">fluxo-de-caixa.md</p>
<p class="hover:text-primary transition-colors cursor-pointer">precificacao.md</p>
</div>
</div>
<!-- Item 3: Clientes -->
<div class="p-2 rounded hover:bg-surface-elevated/40 transition-colors cursor-pointer group/node">
<div class="flex items-center gap-2 text-on-surface font-medium group-hover/node:text-telemetry-cyan transition-colors">
<span class="material-symbols-outlined text-[16px] text-telemetry-cyan" data-icon="folder">folder</span>
<span>▸ clientes</span>
</div>
<div class="pl-6 pt-1 space-y-1 text-xs text-on-surface-variant">
<p class="hover:text-primary transition-colors cursor-pointer">base-de-clientes.md</p>
<p class="hover:text-primary transition-colors cursor-pointer">jornada.md</p>
</div>
</div>
<!-- Item 4: Marketing -->
<div class="p-2 rounded hover:bg-surface-elevated/40 transition-colors cursor-pointer group/node">
<div class="flex items-center gap-2 text-on-surface font-medium group-hover/node:text-telemetry-cyan transition-colors">
<span class="material-symbols-outlined text-[16px] text-telemetry-cyan" data-icon="folder">folder</span>
<span>▸ marketing</span>
</div>
<div class="pl-6 pt-1 space-y-1 text-xs text-on-surface-variant">
<p class="hover:text-primary transition-colors cursor-pointer">calendario.md</p>
<p class="hover:text-primary transition-colors cursor-pointer">campanhas.md</p>
</div>
</div>
<!-- Item 5: Processos & Propostas -->
<div class="p-2 rounded hover:bg-surface-elevated/40 transition-colors cursor-pointer group/node">
<div class="flex items-center gap-2 text-on-surface font-medium group-hover/node:text-telemetry-cyan transition-colors">
<span class="material-symbols-outlined text-[16px] text-telemetry-cyan" data-icon="folder">folder</span>
<span>▸ processos &amp; propostas</span>
</div>
</div>
</div>
</div>
<!-- Right: Real-time Telemetry & Intelligence Cross-Analysis -->
<div class="md:col-span-8 p-6 flex flex-col justify-between bg-surface-deep/70">
<div class="space-y-4">
<!-- Active File Breadcrumb -->
<div class="flex items-center justify-between border-b border-border-subtle pb-3">
<div class="flex items-center gap-2 font-label-mono-sm text-label-mono-sm text-primary">
<span class="material-symbols-outlined text-[16px]" data-icon="description">description</span>
<span># contexto-do-negocio.md</span>
</div>
<span class="font-label-mono-sm text-[11px] text-outline flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-telemetry-cyan animate-ping"></span>
  Leitura multi-vetorial ativa
</span>
</div>
<p class="font-body-md text-on-surface-variant leading-relaxed">
              A IA lê o contexto de cada pasta e cruza as informações — <span class="text-primary font-medium">ex.: financeiro + clientes</span> — para sugerir a próxima ação da sua empresa de maneira preditiva e cirúrgica.
            </p>
<!-- Intelligence Card Output (High-Impact Highlight) -->
<div class="mt-4 p-5 rounded-xl bg-surface-elevated/90 border border-primary/40 relative overflow-hidden shadow-lg hover:border-primary transition-all duration-300">
<div class="absolute -right-6 -bottom-6 w-32 h-32 bg-primary/15 rounded-full blur-2xl pointer-events-none"></div>
<div class="flex items-center justify-between pb-3">
<div class="flex items-center gap-2 text-primary font-label-mono-sm text-label-mono-sm">
<span class="material-symbols-outlined text-[18px]" data-icon="psychology">psychology</span>
<span>→ sugestão da IA (Executive Core)</span>
</div>
<span class="px-2 py-0.5 rounded bg-telemetry-cyan/15 text-telemetry-cyan font-label-mono-sm text-[10px] border border-telemetry-cyan/30">
                  Cruzamento: Financeiro + CRM
                </span>
</div>
<blockquote class="font-label-mono-lg text-label-mono-lg text-primary-fixed border-l-2 border-primary pl-4 py-1 leading-relaxed">
                “Seu fluxo de caixa cai em 12 dias. Aqui estão 3 clientes inativos com maior LTV para reativar antes disso com uma proposta customizada.”
              </blockquote>
<div class="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-label-mono-sm text-on-surface-variant">
<span>Ação gerada: Script de reativação + Proposta formatada</span>
<span class="text-telemetry-cyan flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]" data-icon="done_all">done_all</span> Pronto para envio
                </span>
</div>
</div>
</div>
<!-- Micro Terminal Status Footer -->
<div class="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-outline font-label-mono-sm">
<span class="flex items-center gap-1.5">
<span class="text-primary">\$</span> winos@corporation:~# status --all-nodes
</span>
<span class="text-primary font-semibold flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
  100% OPERACIONAL
</span>
</div>
</div>
</div>
</div>
</section>
<!-- ================= SECTION: AS 3 JORNADAS ================= -->
<section class="py-20 px-6 max-w-7xl mx-auto border-t border-border-subtle/60" id="jornadas">
<div class="text-center max-w-2xl mx-auto mb-16 space-y-3 reveal-on-scroll">
<div class="font-label-mono-sm text-label-mono-sm text-telemetry-cyan tracking-widest uppercase">
        / jornadas.sys
      </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
        Qual é a sua jornada?
      </h2>
<p class="font-body-md text-on-surface-variant">
        O Win OS adapta sua arquitetura para o estágio exato de maturidade do seu negócio.
      </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- Card 1: Iniciar -->
<div class="spotlight-card p-8 rounded-2xl bg-surface-charcoal/70 border border-white/10 backdrop-blur-xl gold-card-sheen hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 reveal-on-scroll">
<div class="flex items-center justify-between mb-6">
<div class="w-12 h-12 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[26px]" data-icon="rocket_launch">rocket_launch</span>
</div>
<span class="font-label-mono-sm text-label-mono-sm text-outline group-hover:text-primary transition-colors">
            MODULO.01
          </span>
</div>
<h3 class="font-headline-md text-headline-md font-semibold text-on-surface mb-3 group-hover:text-primary transition-colors">
          Iniciar
        </h3>
<p class="font-body-md text-on-surface-variant leading-relaxed">
          Comece sua empresa do zero, com estrutura pronta desde o primeiro dia. Sem reuniões caóticas e sem planilhas perdidas.
        </p>
<div class="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-label-mono-sm text-outline">
<span>SETUP: IMEDIATO</span>
<span class="text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Ver detalhes <span class="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
</span>
</div>
</div>
<!-- Card 2: Organizar -->
<div class="spotlight-card p-8 rounded-2xl bg-surface-charcoal/70 border border-white/10 backdrop-blur-xl gold-card-sheen hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 relative reveal-on-scroll">
<div class="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-primary text-surface-deep font-label-mono-sm text-[10px] font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(229,184,66,0.4)]">
          Mais Procurado
        </div>
<div class="flex items-center justify-between mb-6">
<div class="w-12 h-12 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[26px]" data-icon="folder_special">folder_special</span>
</div>
<span class="font-label-mono-sm text-label-mono-sm text-outline group-hover:text-primary transition-colors">
            MODULO.02
          </span>
</div>
<h3 class="font-headline-md text-headline-md font-semibold text-on-surface mb-3 group-hover:text-primary transition-colors">
          Organizar
        </h3>
<p class="font-body-md text-on-surface-variant leading-relaxed">
          Coloque ordem no que já existe: finanças, clientes e processos num só lugar. Ganhe visão executiva e acabe com o retrabalho.
        </p>
<div class="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-label-mono-sm text-outline">
<span>FLUXO: CENTRALIZADO</span>
<span class="text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Ver detalhes <span class="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
</span>
</div>
</div>
<!-- Card 3: Digitalizar -->
<div class="spotlight-card p-8 rounded-2xl bg-surface-charcoal/70 border border-white/10 backdrop-blur-xl cyan-card-sheen hover:border-telemetry-cyan/50 transition-all duration-300 group hover:-translate-y-1 reveal-on-scroll">
<div class="flex items-center justify-between mb-6">
<div class="w-12 h-12 rounded-xl bg-telemetry-cyan/10 border border-telemetry-cyan/25 flex items-center justify-center text-telemetry-cyan group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[26px]" data-icon="computer">computer</span>
</div>
<span class="font-label-mono-sm text-label-mono-sm text-outline group-hover:text-telemetry-cyan transition-colors">
            MODULO.03
          </span>
</div>
<h3 class="font-headline-md text-headline-md font-semibold text-on-surface mb-3 group-hover:text-telemetry-cyan transition-colors">
          Digitalizar
        </h3>
<p class="font-body-md text-on-surface-variant leading-relaxed">
          Transforme um negócio físico ou tradicional em uma operação digital inteligente, pronta para escalar com apoio de agentes autônomos.
        </p>
<div class="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-label-mono-sm text-outline">
<span>ESCALA: EXPONENCIAL</span>
<span class="text-telemetry-cyan flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Ver detalhes <span class="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
</span>
</div>
</div>
</div>
</section>
<!-- ================= SECTION: COMO OPERA NA PRÁTICA ================= -->
<section class="py-20 px-6 max-w-7xl mx-auto">
<div class="text-center max-w-3xl mx-auto mb-16 space-y-3 reveal-on-scroll">
<div class="font-label-mono-sm text-label-mono-sm text-primary tracking-widest uppercase">
        / aplicacao.sys
      </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
        Como o Win OS opera na prática
      </h2>
<p class="font-body-md text-on-surface-variant">
        Soluções estruturadas para resolver os principais gargalos de quem precisa produzir mais com menos tempo.
      </p>
</div>
<!-- 4 Sector Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Sector 1 -->
<div class="spotlight-card p-8 rounded-2xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between mb-4">
<span class="font-label-mono-sm text-label-mono-sm text-primary bg-primary/10 px-3 py-1 rounded border border-primary/20">
            MARKETING &amp; CRIAÇÃO
          </span>
<span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="campaign">campaign</span>
</div>
<h3 class="font-headline-md text-headline-md font-semibold text-on-surface mb-2">
          Agências &amp; Produtores de Conteúdo
        </h3>
<p class="font-body-md text-on-surface-variant mb-6 leading-relaxed">
          O que levava dias de planejamento de campanhas e briefings agora é estruturado em minutos com as orientações do Squad.
        </p>
<div class="flex items-start gap-2.5 p-3.5 rounded-lg bg-surface-deep/70 border border-border-subtle text-body-sm text-on-surface">
<span class="text-primary font-bold">🎯 Foco:</span>
<span>Centralização de skills de marketing, criativos, tráfego e copy.</span>
</div>
</div>
<!-- Sector 2 -->
<div class="spotlight-card p-8 rounded-2xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-telemetry-cyan/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between mb-4">
<span class="font-label-mono-sm text-label-mono-sm text-telemetry-cyan bg-telemetry-cyan/10 px-3 py-1 rounded border border-telemetry-cyan/20">
            COMERCIAL &amp; VENDAS
          </span>
<span class="material-symbols-outlined text-outline group-hover:text-telemetry-cyan transition-colors" data-icon="handshake">handshake</span>
</div>
<h3 class="font-headline-md text-headline-md font-semibold text-on-surface mb-2">
          Prestadores de Serviços &amp; Consultores
        </h3>
<p class="font-body-md text-on-surface-variant mb-6 leading-relaxed">
          Propostas personalizadas criadas com o contexto real da empresa, acelerando o tempo de resposta e fechamento comercial.
        </p>
<div class="flex items-start gap-2.5 p-3.5 rounded-lg bg-surface-deep/70 border border-border-subtle text-body-sm text-on-surface">
<span class="text-telemetry-cyan font-bold">🎯 Foco:</span>
<span>Geração ágil de propostas e qualificação de clientes em tempo recorde.</span>
</div>
</div>
<!-- Sector 3 -->
<div class="spotlight-card p-8 rounded-2xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between mb-4">
<span class="font-label-mono-sm text-label-mono-sm text-primary bg-primary/10 px-3 py-1 rounded border border-primary/20">
            FINANCEIRO &amp; OPERAÇÕES
          </span>
<span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="account_balance">account_balance</span>
</div>
<h3 class="font-headline-md text-headline-md font-semibold text-on-surface mb-2">
          Pequenas Empresas &amp; Negócios Locais
        </h3>
<p class="font-body-md text-on-surface-variant mb-6 leading-relaxed">
          Visão clara das finanças, rotinas de cobrança estruturadas e documentação do negócio sem burocracia ou planilhas perdidas.
        </p>
<div class="flex items-start gap-2.5 p-3.5 rounded-lg bg-surface-deep/70 border border-border-subtle text-body-sm text-on-surface">
<span class="text-primary font-bold">🎯 Foco:</span>
<span>Organização do fluxo de caixa e padronização de processos diários.</span>
</div>
</div>
<!-- Sector 4 -->
<div class="spotlight-card p-8 rounded-2xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-telemetry-cyan/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between mb-4">
<span class="font-label-mono-sm text-label-mono-sm text-telemetry-cyan bg-telemetry-cyan/10 px-3 py-1 rounded border border-telemetry-cyan/20">
            GESTÃO &amp; ESTRATÉGIA
          </span>
<span class="material-symbols-outlined text-outline group-hover:text-telemetry-cyan transition-colors" data-icon="query_stats">query_stats</span>
</div>
<h3 class="font-headline-md text-headline-md font-semibold text-on-surface mb-2">
          Autônomos &amp; Novos Empreendedores
        </h3>
<p class="font-body-md text-on-surface-variant mb-6 leading-relaxed">
          Suporte diário de gerentes de inteligência para tomar decisões estratégicas com segurança e foco no que gera receita.
        </p>
<div class="flex items-start gap-2.5 p-3.5 rounded-lg bg-surface-deep/70 border border-border-subtle text-body-sm text-on-surface">
<span class="text-telemetry-cyan font-bold">🎯 Foco:</span>
<span>Jornada do zero para organizar e acelerar o crescimento do negócio.</span>
</div>
</div>
</div>
</section>
<!-- ================= SECTION: 4 GERENTES EXECUTIVOS & 60+ SKILLS ================= -->
<section class="py-20 px-6 max-w-7xl mx-auto border-t border-border-subtle/60" id="skills">
<div class="text-center max-w-3xl mx-auto mb-16 space-y-3 reveal-on-scroll">
<div class="font-label-mono-sm text-label-mono-sm text-primary tracking-widest uppercase">
        / skills.sys
      </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
        4 Gerentes Executivos. <br class="hidden sm:inline"/> 60+ Skills Corporativas.
      </h2>
<p class="font-body-md text-on-surface-variant">
        Sua IA assume o papel de líderes experientes, prontos para executar tarefas de alto nível nas 4 áreas vitais do seu negócio.
      </p>
</div>
<!-- 4 C-Level Executive Matrix -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Leader 1: CMO -->
<div class="spotlight-card p-7 rounded-2xl bg-surface-charcoal/70 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between pb-4 border-b border-border-subtle">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-[22px]" data-icon="ads_click">ads_click</span>
</div>
<div>
<span class="font-label-mono-sm text-[11px] text-outline">EXECUTIVE LEADER 01</span>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">
                Marketing &amp; Vendas
              </h3>
</div>
</div>
<span class="px-2.5 py-1 rounded bg-surface-elevated font-label-mono-sm text-xs text-primary border border-primary/20">
            CMO Squad
          </span>
</div>
<ul class="mt-6 space-y-3.5 font-body-md text-on-surface-variant">
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">01</span>
<span>Calendário de conteúdo e campanhas</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">02</span>
<span>Funil de vendas e scripts de abordagem</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">03</span>
<span>Propostas comerciais persuasivas</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">04</span>
<span>Análise de mercado e posicionamento</span>
</li>
</ul>
</div>
<!-- Leader 2: CFO -->
<div class="spotlight-card p-7 rounded-2xl bg-surface-charcoal/70 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between pb-4 border-b border-border-subtle">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-[22px]" data-icon="account_balance_wallet">account_balance_wallet</span>
</div>
<div>
<span class="font-label-mono-sm text-[11px] text-outline">EXECUTIVE LEADER 02</span>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">
                Financeiro &amp; Controle
              </h3>
</div>
</div>
<span class="px-2.5 py-1 rounded bg-surface-elevated font-label-mono-sm text-xs text-primary border border-primary/20">
            CFO Squad
          </span>
</div>
<ul class="mt-6 space-y-3.5 font-body-md text-on-surface-variant">
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">05</span>
<span>Fluxo de caixa inteligente</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">06</span>
<span>Precificação de produtos e serviços</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">07</span>
<span>Projeção de lucros e metas</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">08</span>
<span>Cobrança e recuperação de clientes</span>
</li>
</ul>
</div>
<!-- Leader 3: COO -->
<div class="spotlight-card p-7 rounded-2xl bg-surface-charcoal/70 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-telemetry-cyan/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between pb-4 border-b border-border-subtle">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-telemetry-cyan/10 border border-telemetry-cyan/30 flex items-center justify-center text-telemetry-cyan group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-[22px]" data-icon="alt_route">alt_route</span>
</div>
<div>
<span class="font-label-mono-sm text-[11px] text-outline">EXECUTIVE LEADER 03</span>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">
                Governança &amp; Processos
              </h3>
</div>
</div>
<span class="px-2.5 py-1 rounded bg-surface-elevated font-label-mono-sm text-xs text-telemetry-cyan border border-telemetry-cyan/20">
            COO Squad
          </span>
</div>
<ul class="mt-6 space-y-3.5 font-body-md text-on-surface-variant">
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-telemetry-cyan font-bold">09</span>
<span>Rotinas diárias e checklists operacionais</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-telemetry-cyan font-bold">10</span>
<span>Padronização de entregas e SLAs</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-telemetry-cyan font-bold">11</span>
<span>Gestão da jornada e suporte do cliente</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-telemetry-cyan font-bold">12</span>
<span>Onboarding de novos colaboradores</span>
</li>
</ul>
</div>
<!-- Leader 4: CEO -->
<div class="spotlight-card p-7 rounded-2xl bg-surface-charcoal/70 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300 reveal-on-scroll">
<div class="flex items-center justify-between pb-4 border-b border-border-subtle">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-[22px]" data-icon="crown">crown</span>
</div>
<div>
<span class="font-label-mono-sm text-[11px] text-outline">EXECUTIVE LEADER 04</span>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">
                Gestão Estratégica
              </h3>
</div>
</div>
<span class="px-2.5 py-1 rounded bg-surface-elevated font-label-mono-sm text-xs text-primary border border-primary/20">
            CEO Squad
          </span>
</div>
<ul class="mt-6 space-y-3.5 font-body-md text-on-surface-variant">
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">13</span>
<span>Diagnóstico e contexto do negócio</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">14</span>
<span>Definição de OKRs e métricas principais</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">15</span>
<span>Estratégia de crescimento sustentável</span>
</li>
<li class="flex items-start gap-3 p-2 rounded hover:bg-surface-elevated/50 transition-colors">
<span class="font-label-mono-sm text-primary font-bold">16</span>
<span>Reuniões de alinhamento com a IA</span>
</li>
</ul>
</div>
</div>
</section>
<!-- ================= SECTION: OFERTA IRRECUSÁVEL & VALOR ================= -->
<section class="py-24 px-6 max-w-5xl mx-auto" id="oferta">
<div class="text-center max-w-2xl mx-auto mb-12 space-y-3 reveal-on-scroll">
<div class="font-label-mono-sm text-label-mono-sm text-primary tracking-widest uppercase">
        acesso.sys
      </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
        Acesso Imediato ao Sistema Completo
      </h2>
<p class="font-body-md text-on-surface-variant">
        Uma fração microscópica do custo de uma equipe executiva tradicional.
      </p>
</div>
<!-- Comparative Anchor Pill -->
<div class="max-w-2xl mx-auto mb-8 p-4 rounded-xl bg-surface-charcoal/50 border border-border-subtle flex flex-col sm:flex-row items-center justify-around gap-4 text-center sm:text-left font-label-mono-sm text-xs reveal-on-scroll">
<div class="text-outline">
<span>Contratar uma diretoria:</span>
<strong class="text-error block text-sm">R\$ 25.000/mês</strong>
</div>
<div class="w-px h-8 bg-border-subtle hidden sm:block"></div>
<div class="text-outline">
<span>Pagar 12 ferramentas soltas:</span>
<strong class="text-error block text-sm">R\$ 1.500/mês</strong>
</div>
<div class="w-px h-8 bg-border-subtle hidden sm:block"></div>
<div class="text-primary font-medium">
<span>Win OS vitalício:</span>
<strong class="text-primary text-base block font-bold">R\$ 47 único</strong>
</div>
</div>
<!-- The Flagship Executive Glass Card -->
<div class="rounded-3xl bg-surface-charcoal/80 border-2 border-primary/50 backdrop-blur-2xl p-8 md:p-12 shadow-2xl offer-glow-card relative overflow-hidden reveal-on-scroll">
<!-- Glow ambient -->
<div class="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
<div class="text-center pb-8 border-b border-border-subtle space-y-3">
<span class="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-label-mono-sm text-xs tracking-wider uppercase font-semibold">
          SYSTEM CORE: ENTERPRISE LIFETIME
        </span>
<div class="flex items-center justify-center gap-2">
<span class="font-headline-hero text-headline-hero font-extrabold text-primary">
            R\$ 47
          </span>
</div>
<p class="font-body-md text-on-surface-variant">
          Pagamento único. Acesso vitalício. O sistema completo.
        </p>
</div>
<!-- Itemized Stack Breakdown -->
<div class="py-8 space-y-4 font-body-md border-b border-border-subtle">
<div class="text-xs font-label-mono-sm text-outline tracking-wider uppercase pb-2">
          O que você leva hoje:
        </div>
<div class="flex items-center justify-between py-1.5 border-b border-white/5">
<div class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
<span class="text-on-surface">Estrutura Completa de Diretórios Win OS</span>
</div>
<span class="font-label-mono-sm text-xs text-outline line-through">R\$ 297</span>
</div>
<div class="flex items-center justify-between py-1.5 border-b border-white/5">
<div class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
<span class="text-on-surface">60+ Skills Corporativas e Prompts Prontos</span>
</div>
<span class="font-label-mono-sm text-xs text-outline line-through">R\$ 497</span>
</div>
<div class="flex items-center justify-between py-1.5 border-b border-white/5">
<div class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
<span class="text-on-surface">Framework de 4 Gerentes Executivos</span>
</div>
<span class="font-label-mono-sm text-xs text-outline line-through">R\$ 297</span>
</div>
<div class="flex items-center justify-between py-1.5 border-b border-white/5">
<div class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
<span class="text-on-surface">Acesso Vitalício + Atualizações</span>
</div>
<span class="font-label-mono-sm text-xs text-outline line-through">R\$ 197</span>
</div>
<!-- Bonus row -->
<div class="flex items-center justify-between py-1.5 text-primary">
<div class="flex items-center gap-2.5 font-medium">
<span class="material-symbols-outlined text-telemetry-cyan text-[20px]" data-icon="stars">stars</span>
<span class="text-primary-fixed">BÔNUS: Comunidade de Empresários com IA</span>
</div>
<span class="font-label-mono-sm text-xs text-telemetry-cyan uppercase">Incluso</span>
</div>
</div>
<!-- Financial Calculation Bar -->
<div class="pt-6 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-label-mono-sm">
<div class="text-outline text-sm">
          Valor Total do Sistema: <span class="line-through text-outline-variant font-bold">R\$ 1.288</span>
</div>
<div class="text-right">
<span class="text-xs text-on-surface-variant block">Hoje você paga apenas:</span>
<span class="text-2xl font-bold text-primary">R\$ 47</span>
</div>
</div>
<!-- Conversion Button -->
<div class="space-y-4 text-center">
<a class="cta-sheen w-full gold-gradient-bg text-on-primary font-headline-md text-headline-md font-bold py-5 px-8 rounded-xl shadow-[0_0_36px_rgba(229,184,66,0.35)] hover:shadow-[0_0_50px_rgba(229,184,66,0.6)] transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 group" href="https://pay.kiwify.com.br/lYkLOmo" rel="noopener noreferrer" target="_blank">
<span>Quero acessar o Win OS por R\$47</span>
<span class="material-symbols-outlined text-[24px] transition-transform duration-200 group-hover:translate-x-1.5" data-icon="arrow_forward">arrow_forward</span>
</a>
<div class="flex items-center justify-center gap-3 font-label-mono-sm text-xs text-on-surface-variant">
<span class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px] text-primary" data-icon="lock">lock</span>
            Pagamento seguro via Pix ou Cartão
          </span>
<span>·</span>
<span>Acesso imediato ao sistema</span>
</div>
</div>
<!-- Guarantee Seal -->
<div class="mt-8 p-5 rounded-xl bg-surface-deep/60 border border-border-subtle flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
<div class="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
<span class="material-symbols-outlined text-[26px]" data-icon="verified">verified</span>
</div>
<div>
<h4 class="font-headline-sm text-body-md font-semibold text-on-surface">
            Garantia Incondicional de 7 Dias
          </h4>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Experimente o Win OS por 7 dias. Se por qualquer motivo achar que não valeu a pena, basta pedir o reembolso e devolvemos 100% do seu dinheiro, sem perguntas.
          </p>
</div>
</div>
</div>
</section>
<!-- ================= SECTION: COMUNIDADE ================= -->
<section class="py-16 px-6 max-w-7xl mx-auto border-t border-border-subtle/60">
<div class="spotlight-card p-8 md:p-12 rounded-2xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden reveal-on-scroll">
<div class="space-y-3 max-w-2xl">
<div class="font-label-mono-sm text-label-mono-sm text-primary tracking-widest uppercase">
          / comunidade.sys
        </div>
<div class="inline-block px-3 py-1 rounded bg-telemetry-cyan/10 text-telemetry-cyan border border-telemetry-cyan/25 font-label-mono-sm text-xs">
          Acesso incluso na sua licença vitalícia
        </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
          Junte-se a empresários e agências que operam com IA
        </h2>
<p class="font-body-md text-on-surface-variant leading-relaxed">
          Troque prompts, receba novas skills operacionais, tire dúvidas e acompanhe atualizações contínuas do sistema direto com os criadores.
        </p>
</div>
<div class="shrink-0 w-full md:w-auto">
<a class="cta-sheen w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-primary/50 text-primary font-headline-sm text-body-sm font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-200 group" href="https://pay.kiwify.com.br/lYkLOmo" rel="noopener noreferrer" target="_blank">
<span>Garantir meu acesso com comunidade</span>
<span class="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-icon="north_east">north_east</span>
</a>
</div>
</div>
</section>
<!-- ================= SECTION: FAQ ================= -->
<section class="py-20 px-6 max-w-4xl mx-auto" id="faq">
<div class="text-center max-w-2xl mx-auto mb-16 space-y-3 reveal-on-scroll">
<div class="font-label-mono-sm text-label-mono-sm text-primary tracking-widest uppercase">
        / duvidas.sys
      </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
        Perguntas frequentes
      </h2>
<p class="font-body-md text-on-surface-variant">
        Tudo o que você precisa saber antes de implantar o Win OS no seu negócio.
      </p>
</div>
<div class="space-y-4" id="faq-container">
<!-- FAQ 1 (Default Open) -->
<div class="spotlight-card p-6 rounded-xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-md transition-all duration-200 reveal-on-scroll">
<button class="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm font-semibold text-on-surface focus:outline-none cursor-pointer" onclick="toggleFaq(this)">
<span>Preciso entender de tecnologia para usar o Win OS?</span>
<span class="material-symbols-outlined text-primary text-[22px] transition-transform duration-300 transform rotate-180" data-icon="expand_more">expand_more</span>
</button>
<div class="faq-content overflow-hidden transition-all duration-300 max-h-96 opacity-100">
<div class="mt-3 text-body-md text-on-surface-variant leading-relaxed border-t border-border-subtle pt-3">
          Não. O Win OS foi feito para quem nunca organizou uma empresa em sistema nenhum. A estrutura já vem pronta, você só preenche com os dados básicos do seu negócio e pluga nas ferramentas que já usa.
        </div>
</div>
</div>
<!-- FAQ 2 -->
<div class="spotlight-card p-6 rounded-xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-md transition-all duration-200 reveal-on-scroll">
<button class="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm font-semibold text-on-surface focus:outline-none cursor-pointer" onclick="toggleFaq(this)">
<span>Minha empresa ainda não existe formalmente, consigo usar?</span>
<span class="material-symbols-outlined text-primary text-[22px] transition-transform duration-300 transform rotate-0" data-icon="expand_more">expand_more</span>
</button>
<div class="faq-content overflow-hidden transition-all duration-300 max-h-0 opacity-0">
<div class="mt-3 text-body-md text-on-surface-variant leading-relaxed border-t border-border-subtle pt-3">
          Sim, perfeitamente. O módulo INICIAR foi desenhado exatamente para estruturar um negócio desde o primeiro dia com processos consolidados, economizando meses de tentativas e erros.
        </div>
</div>
</div>
<!-- FAQ 3 -->
<div class="spotlight-card p-6 rounded-xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-md transition-all duration-200 reveal-on-scroll">
<button class="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm font-semibold text-on-surface focus:outline-none cursor-pointer" onclick="toggleFaq(this)">
<span>Tenho um negócio físico, o Win OS serve para mim?</span>
<span class="material-symbols-outlined text-primary text-[22px] transition-transform duration-300 transform rotate-0" data-icon="expand_more">expand_more</span>
</button>
<div class="faq-content overflow-hidden transition-all duration-300 max-h-0 opacity-0">
<div class="mt-3 text-body-md text-on-surface-variant leading-relaxed border-t border-border-subtle pt-3">
          Com certeza. Restaurantes, clínicas, lojas físicas e oficinas usam o Win OS para padronizar rotinas de atendimento, controle de caixa e estratégias locais de aquisição de novos clientes.
        </div>
</div>
</div>
<!-- FAQ 4 -->
<div class="spotlight-card p-6 rounded-xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-md transition-all duration-200 reveal-on-scroll">
<button class="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm font-semibold text-on-surface focus:outline-none cursor-pointer" onclick="toggleFaq(this)">
<span>Quanto tempo leva para configurar tudo?</span>
<span class="material-symbols-outlined text-primary text-[22px] transition-transform duration-300 transform rotate-0" data-icon="expand_more">expand_more</span>
</button>
<div class="faq-content overflow-hidden transition-all duration-300 max-h-0 opacity-0">
<div class="mt-3 text-body-md text-on-surface-variant leading-relaxed border-t border-border-subtle pt-3">
          Aproximadamente 15 minutos. A arquitetura de diretórios e todas as 60+ skills já vêm pré-construídas. Basta seguir o checklist guiado de boas-vindas.
        </div>
</div>
</div>
<!-- FAQ 5 -->
<div class="spotlight-card p-6 rounded-xl bg-surface-charcoal/60 border border-white/10 backdrop-blur-md transition-all duration-200 reveal-on-scroll">
<button class="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm font-semibold text-on-surface focus:outline-none cursor-pointer" onclick="toggleFaq(this)">
<span>E se eu já uso outras ferramentas na minha empresa?</span>
<span class="material-symbols-outlined text-primary text-[22px] transition-transform duration-300 transform rotate-0" data-icon="expand_more">expand_more</span>
</button>
<div class="faq-content overflow-hidden transition-all duration-300 max-h-0 opacity-0">
<div class="mt-3 text-body-md text-on-surface-variant leading-relaxed border-t border-border-subtle pt-3">
          O Win OS não substitui forçadamente suas ferramentas existentes — ele atua como o cérebro central unificador. Você integra as saídas do seu CRM ou planilhas diretamente no contexto dos diretórios.
        </div>
</div>
</div>
</div>
</section>
<!-- ================= FINAL CTA ENCERRAMENTO ================= -->
<section class="py-20 px-6 max-w-5xl mx-auto text-center">
<div class="p-10 md:p-16 rounded-3xl bg-surface-charcoal/80 border border-primary/30 backdrop-blur-2xl offer-glow-card relative overflow-hidden space-y-6 reveal-on-scroll">
<div class="font-label-mono-sm text-label-mono-sm text-primary tracking-widest uppercase">
        / encerramento.sys
      </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
        Pronto para organizar sua empresa com IA?
      </h2>
<p class="font-body-md text-on-surface-variant max-w-xl mx-auto">
        Junte-se à nova classe de empresários que comandam operações lucrativas sem sobrecarga operacional.
      </p>
<div class="pt-4">
<a class="cta-sheen inline-flex gold-gradient-bg text-on-primary font-headline-md text-headline-md font-bold px-10 py-5 rounded-xl shadow-[0_0_35px_rgba(229,184,66,0.35)] hover:shadow-[0_0_55px_rgba(229,184,66,0.65)] transition-all duration-200 active:scale-95 items-center gap-3 group" href="https://pay.kiwify.com.br/lYkLOmo" rel="noopener noreferrer" target="_blank">
<span>Quero acessar o Win OS por R\$47</span>
<span class="material-symbols-outlined text-[24px] transition-transform duration-200 group-hover:translate-x-1.5" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
<div class="font-label-mono-sm text-xs text-outline pt-2">
        Win OS — Sistema Operacional de IA para Negócios Reais
      </div>
</div>
</section>
<!-- ================= FOOTER (Shared Component: Footer) ================= -->
<footer class="bg-surface-deep dark:bg-surface-deep text-primary dark:text-primary full-width bottom border-t border-border-subtle dark:border-border-subtle">
<div class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 py-12 w-full gap-6">
<!-- Brand & Description -->
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-surface-elevated flex items-center justify-center p-1 border border-border-subtle">
<img alt="Win OS Logo" class="w-6 h-6 object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1V28-_pLfpyTRMgwSUH6bYyL9t4v0vSncV2Y6iwVzpAXwyv0CA4Xf4aP04CCW87PD7jyanaQjFnuEK9HPQd72hwGmbH3-dyIhQ3YenwiLcR4xLIRhUH_DLcvn2sCv6JpBomJvwnQ1NV5qoDn4HRxvheFkDjsH9LY8k3-uRNc7A_6gRKhvPUCuO7NezGvaaunapzEp0GUGzoLwuGWkHgZqgoVwa3Hs4oz8TdpFMrR-g1NFkXKcUq7ylfEDQN"/>
</div>
<div>
<span class="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary">
            Win OS
          </span>
<p class="font-body-sm text-body-sm text-on-surface-variant">
            Desenvolvido por Creative Agência e Tecnologia
          </p>
</div>
</div>
<!-- Links Cluster -->
<div class="flex flex-wrap items-center justify-center gap-6">
<a class="text-on-surface-variant dark:text-on-surface-variant font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#">
          Privacy Protocol
        </a>
<a class="text-on-surface-variant dark:text-on-surface-variant font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#">
          Terms of Operations
        </a>
<a class="text-on-surface-variant dark:text-on-surface-variant font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#">
          Telemetry API
        </a>
<a class="text-primary dark:text-primary font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#">
          System Status
        </a>
<a class="text-on-surface-variant dark:text-on-surface-variant font-label-mono-sm text-label-mono-sm hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#">
          Security Whitepaper
        </a>
</div>
<!-- Copyright -->
<div class="font-label-mono-sm text-label-mono-sm text-outline text-center md:text-right">
        © 2026 Win OS · Creative Marketing. Todos os direitos reservados.
      </div>
</div>
</footer>
</div>
<!-- Complete Interactivity & Motion Graphics Suite JavaScript -->
<script>
  // 1. Mouse Tracking Spotlight on Interactive Cards
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', \`\${x}px\`);
        card.style.setProperty('--mouse-y', \`\${y}px\`);
      });
    });

    // 2. IntersectionObserver for Staggered Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    };`}
      </Script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <main dangerouslySetInnerHTML={{ __html: rawHtml }} />
      <Core3D />
</>
  );
}
