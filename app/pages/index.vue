<script setup lang="ts">
import { education, jobs, profile, projects, stack, summary, tagline, timeline } from '~/data/content'

const asset = useAsset()
</script>

<template>
  <main id="conteudo" class="main">
    <section id="resumo" class="sec profile">
      <img class="avatar" :src="asset('me.jpg')" alt="Foto de Kauã Rodrigues" width="112" height="112">
      <div>
        <span class="eyebrow">Portfólio</span>
        <h1>{{ profile.name }}</h1>
        <p class="p-role">{{ tagline }}</p>
        <p class="p-meta">{{ profile.location }}</p>
      </div>
      <div class="summary">
        <p v-for="p in summary" :key="p">{{ p }}</p>
      </div>
      <div class="actions">
        <a class="btn solid" :href="profile.cv" download>Baixar currículo</a>
        <a class="btn" href="#projetos">Meus projetos</a>
        <a class="btn" :href="profile.linkedin">LinkedIn</a>
        <a class="btn" :href="profile.github">GitHub</a>
        <a class="btn" :href="`mailto:${profile.email}`">E-mail</a>
      </div>
    </section>

    <section id="timeline" class="sec">
      <h2>Linha do tempo</h2>
      <ul class="tline">
        <li v-for="item in timeline" :key="item.label">
          <b>{{ item.label }}:</b> {{ item.text }}
        </li>
      </ul>
    </section>

    <section id="experiencia" class="sec">
      <h2>Experiência</h2>
      <article v-for="job in jobs" :key="job.id" class="job">
        <div v-if="job.marks" class="logo-pair">
          <Logo v-for="m in job.marks" :key="m.src" :src="m.src" :initials="m.initials" :dark="m.dark" />
        </div>
        <Logo v-else :src="job.logo" :initials="job.initials" :dark="job.darkLogo" :photo="job.photo" />
        <div class="job-body">
          <h3>{{ job.role }}</h3>
          <p class="company">{{ job.company }}<span v-if="job.type"> · {{ job.type }}</span></p>
          <p class="meta">{{ job.period }}</p>
          <p class="meta">{{ job.where }}</p>
          <p class="meta">Projetos: {{ job.projects.join(', ') }}</p>
          <span v-if="job.highlight" class="flag">{{ job.highlight }}</span>
          <p class="desc">{{ job.description }}</p>
          <ul v-if="job.subprojects" class="subs">
            <li v-for="sp in job.subprojects" :key="sp.name" class="sub">
              <Logo :src="sp.logo" :initials="sp.initials" :dark="sp.dark" :wide="sp.wide" :xwide="sp.xwide" />
              <div>
                <h4>{{ sp.name }}</h4>
                <p>{{ sp.text }}</p>
                <ul class="tags"><li v-for="tg in sp.tags" :key="tg" class="tag">{{ tg }}</li></ul>
              </div>
            </li>
          </ul>
          <figure v-if="job.recognition" class="reco">
            <div class="reco-imgs">
              <img v-for="img in job.recognition.images" :key="img.src" :src="asset(img.src)" :alt="img.alt" loading="lazy">
            </div>
            <figcaption>
              {{ job.recognition.text }}
              <a :href="job.recognition.link">{{ job.recognition.linkLabel }} ↗</a>
            </figcaption>
          </figure>
          <p class="skills"><b>Skills:</b> {{ job.skills.join(', ') }}</p>
        </div>
      </article>
      <p class="more"><a :href="profile.cv" download>Baixar currículo completo (PDF) ↓</a></p>
    </section>

    <section id="projetos" class="sec">
      <h2>Projetos</h2>
      <article v-for="p in projects" :key="p.id" class="job proj">
        <Logo :src="p.logo" :initials="p.name.slice(0, 2).toUpperCase()" />
        <div class="job-body">
          <h3>{{ p.name }}</h3>
          <p class="company">{{ p.tagline }}</p>
          <p class="meta">{{ p.kind }}</p>
          <p v-for="para in p.paragraphs" :key="para" class="desc">{{ para }}</p>
          <p v-if="p.note" class="note">{{ p.note }}</p>
          <div v-if="p.shots" class="shots" :class="p.layout">
            <figure v-for="sh in p.shots" :key="sh.src">
              <a :href="asset(sh.src)" target="_blank" rel="noopener">
                <img :src="asset(sh.src)" :alt="sh.caption" loading="lazy">
              </a>
              <figcaption>{{ sh.caption }}</figcaption>
            </figure>
          </div>
          <p class="skills"><b>Tecnologias:</b> {{ p.tags.join(', ') }}</p>
          <p v-if="p.links" class="plinks">
            <a v-for="l in p.links" :key="l.href" :href="l.href">{{ l.label }} ↗</a>
          </p>
        </div>
      </article>
    </section>

    <section id="habilidades" class="sec">
      <h2>Habilidades</h2>
      <dl class="stack">
        <template v-for="g in stack" :key="g.group">
          <dt>{{ g.group }}</dt>
          <dd><span v-for="i in g.items" :key="i" class="tag">{{ i }}</span></dd>
        </template>
      </dl>
    </section>

    <section id="formacao" class="sec">
      <h2>Formação</h2>
      <article v-for="e in education" :key="e.school" class="job edu">
        <Logo :src="e.logo" :initials="e.initials" />
        <div class="job-body">
          <header>
            <div>
              <h3>{{ e.school }}</h3>
              <p class="role-line">{{ e.course }}</p>
            </div>
            <span class="when">{{ e.period }}</span>
          </header>
        </div>
      </article>
    </section>

    <section id="contato" class="sec">
      <h2>Contato</h2>
      <p class="contact-big">Tem um problema que precisa virar sistema?</p>
      <div class="actions">
        <a class="btn solid" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        <a class="btn" :href="profile.github">GitHub</a>
        <a class="btn" :href="profile.linkedin">LinkedIn</a>
      </div>
    </section>

    <p class="foot">{{ profile.name }} · 2026 · Feito com Nuxt e SF Pro. Código em <a :href="profile.github">GitHub</a>.</p>
  </main>
</template>
