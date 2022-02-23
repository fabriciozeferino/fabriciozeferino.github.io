<template>
  <div class="antialiased bg-gray-50 print:bg-white print:text-black md:py-12 text-sm">
    <div
      v-if="content"
      class="page sm:flex print:flex mx-auto"
    >
      <div class="sm:w-4/12 print:w-4/12 print:border-r pt-6 px-4 bg-cyan-900 text-white print:text-black flex flex-col">
        <Avatar class="self-center mb-2" />

        <h1 class="text-center font-bold text-2xl">
          {{ content.name }}
        </h1>
        <p class="text-center mb-4">
          {{ content.job_title }}
        </p>

        <div class="mb-4">
          <Topic
            icon="skills"
            text="Skills"
          />

          <template v-for="skill in content.skills">
            <p
              :key="skill.name"
              class="mb-4"
            >
              <b class="text-base">{{ skill.name }}</b>: {{ skill.description }}
            </p>
          </template>
        </div>

        <div class="mb-4">
          <Topic
            icon="education"
            text="Education"
          />
          <p
            class="font-bold whitespace-nowrap"
            style="font-size: 0.84rem"
          >
            Bachelor of Business Management
          </p>
          <p>
            <span class="font-bold">2006 – 2010</span> | University of South of
            Santa Catarina (UNISUL)
          </p>
          <p>
            {{ content.education.degree_description }}
          </p>
        </div>
      </div>
      <div class="sm:w-8/12 px-4 py-8 text-gray-900">
        <div class="mb-4">
          <h1 class="uppercase text-2xl font-semibold leading-5 border-b-2 border-gray-900 mb-2">
            Professional Summary
          </h1>

          <template
            v-for="(summary, index) in content.professional_summary"
          >
            <p
              :key="index"
              v-html="summary"
            />
          </template>
        </div>

        <div class="mb-4">
          <h1 class="uppercase text-2xl font-semibold leading-5 border-b-2 border-gray-900 mb-2">
            Work History
          </h1>

          <div
            v-for="(workHistory, index) in content.work_histories"
            :key="index"
            class="mb-3"
          >
            <p class="text-base font-bold  mb-0 text-gray-800">
              {{ workHistory.company_name }}
            </p>
            <p
              v-if="workHistory.job_title"
              class="font-semibold text-gray-700 text-sm mb-1"
            >
              {{ workHistory.job_title }} - {{ workHistory.start_at }} | {{ workHistory.end_at }}
            </p>

            <p
              v-for="description in workHistory.description"
              :key="description"
              class="mb-1"
              style="line-height: 1.15"
              v-html="description"
            />
          </div>

          <p>Regards,</p>
          <p class="font-bold">
            Fabricio (Fabi)
          </p>
          <a
            class="text-xs"
            href="https://fabriciozeferino.github.io/"
          >https://fabriciozeferino.github.io</a>
        </div>
      </div>
    </div>

    <div class="flex mt-4 print:hidden">
      <p class="mx-auto text-sm text-gray-600 hover:underline">
        <a
          href="https://github.com/fabriciozeferino/fabriciozeferino.github.io"
          target="_blank"
        >Made with Nuxt.js, GitHub Actions and ❤️</a>
      </p>
    </div>
  </div>
</template>


<script>
import data from '@/pages/data.json'

export default {
  data(){
    return {
      content: data,
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

body,
html {
  width: 100%;
  min-height: 100vh;
  background-color: rgba(249, 250, 251);
  /* width: 230mm; */
  height: 100%;
  margin: 0 auto;
  padding: 0;
  font-size: 1rem;
}

.page {
  max-width: 8.5in;
  box-shadow: rgba(255, 255, 255, 0.1) 0 1px 1px 0 inset,
    rgba(50, 50, 93, 0.25) 0 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0 30px 60px -30px;
}

@media print {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    break-before: always;
  }

  table,
  img,
  svg {
    break-inside: avoid;
  }

  .page {
    width: 8.5in;
    height: 12in;
    background-color: #fff;

    /*box-shadow: initial;*/
  }

  @page {
    margin: 0;
  }
}
</style>
