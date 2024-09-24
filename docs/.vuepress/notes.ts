import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: en-US ======================= */

const C = defineNoteConfig({
  dir: 'C',
  link: '/C/',
  sidebar: 'auto',
})

const Python = defineNoteConfig({
  dir: 'Python',
  link: '/Python/',
  sidebar: 'auto',
})

export const enNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [C, Python],
})

/* =================== locale: zh-CN ======================= */

const zhDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const zhNotes = defineNotesConfig({
  dir: 'zh/notes',
  link: '/zh/',
  notes: [zhDemoNote],
})

