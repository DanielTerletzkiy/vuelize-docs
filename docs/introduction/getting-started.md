# Getting Started with Vuelize

Simply follow these steps to get started:

---

### Step 1: Install Vuelize

Run the following command to install Vuelize via npm:

```shell
npm install vuelize
```

---

### Step 2: Register Vuelize in `main.ts`

Register Vuelize in your Vue application using `app.use`.

```ts
import { createApp } from 'vue';
import App from './App.vue';
import Vuelize from 'vuelize';

const app = createApp(App);

app.use(Vuelize);

app.mount('#app');
```

---

### Step 3: Wrap Your App in `<d-root>` in `App.vue`

Wrap the root component of your application in the `<d-root>` component, which is provided by Vuelize.

This is the most minimal setup:
```vue
<template>
  <d-root>
    <router-view />
  </d-root>
</template>

<script setup lang="ts">
import {DRoot} from 'vuelize';
</script>
```

---

That's it! You're now ready to start using Vuelize in your Vue 3 project.