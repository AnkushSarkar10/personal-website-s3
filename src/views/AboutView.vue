<template>
  <div class="about">
    <div class="bio">
      <p>
        i am <strong>ankush sarkar</strong>, a software developer.
      </p>
      <p>
        i graduated from mcmaster university in <strong>2026</strong> with a degree in computer science.
      </p>
      <p>
        i previously interned <strong>@Hitachi Rail</strong>, where i worked on automatic train supervision software.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  position: relative;
  max-width: 560px;
  width: 100%;
}

.page-label {
  position: absolute;
  top: -2.5rem;
  right: 0;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.bio {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text);
}

.bio strong {
  color: var(--accent);
  font-weight: 700;
}
</style>
