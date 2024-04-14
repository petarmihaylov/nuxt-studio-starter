<template>
  <div>
    <UHeader>
      <template #logo>
        <span>
          Demo Studio
        </span>
      </template>
      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>
    <UMain>
      <NuxtPage />
    </UMain>
    <UFooter>
      <template #right>
        <div class="flex items-center justify-center gap-4">
          <UButton
            icon="i-mdi-github"
            :to="`https://github.com/larbish`"
            color="gray"
            variant="ghost"
            target="_blank"
            :padded="false"
          />
          <UButton
            icon="i-mdi-twitter"
            :to="`https://twitter.com/_larbish`"
            color="gray"
            variant="ghost"
            target="_blank"
            :padded="false"
          />
        </div>
      </template>
    </UFooter>
  </div>
</template>