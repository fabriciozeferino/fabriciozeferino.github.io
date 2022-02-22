<template>
  <div class="antialiased bg-gray-50 md:py-12 text-xs">
    <div class="page sm:flex print:flex mx-auto">
      <div class="sm:w-4/12 pt-6 px-4 bg-cyan-900 text-white flex flex-col">
        <Avatar class="self-center mb-2" />

        <h1 class="text-center font-bold text-2xl">
          {{ content.name }}
        </h1>
        <p class="text-center mb-4">
          {{ content.job_title }}
        </p>

        <div class="mb-4">
          <Topic
            icon="profile"
            text="Profile"
          />
          <p>
            {{ content.profile_description }}
          </p>
        </div>

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
          <p class="font-bold text-sm whitespace-nowrap">
            Bachelor of Business Administration
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
      <div class="sm:w-8/12 px-6 py-12 text-gray-900">
        <div class="mb-8">
          <h1
            class="
              uppercase
              text-3xl
              font-semibold
              border-b-2 border-gray-900
              mb-4
            "
          >
            Professional Summary
          </h1>

          <p>
            {{ content.professional_summary }}
          </p>
        </div>

        <div class="mb-8">
          <h1
            class="
              uppercase
              text-3xl
              font-semibold
              border-b-2 border-gray-900
              mb-4
            "
          >
            Work History
          </h1>

          <div
            v-for="workHistory in content.work_histories"
            :key="workHistory"
          >
            <p class="text-base font-bold mb-0">
              {{ workHistory.company_name }}
            </p>
            <p class="font-medium text-sm mb-1">
              {{ workHistory.job_title }} - {{ workHistory.start_at }} | {{ workHistory.end_at }}
            </p>

            <p
              v-for="description in workHistory.description"
              :key="description"
              class="mb-1"
            >
              {{ description }}
            </p>
          </div>
        </div>
      </div>
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
    /*break-before: always;*/
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
