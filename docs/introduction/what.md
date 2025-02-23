---
outline: deep
---

# What is it?

[Vuelize](https://github.com/DanielTerletzkiy/vuelize) is a lightweight and flexible UI library designed for Vue 3 applications. Its primary goal is to help developers create dynamic and consistent user interfaces more efficiently. It provides a set of reusable and customizable components that are designed to work seamlessly with the Vue 3 ecosystem.

### Key Features:
- **Ease of Integration**: Vuelize integrates easily into your Vue 3 projects and works smoothly with typescript-supported environments.
- **Customizability**: The library offers flexibility in styling and theming, allowing developers to adapt its components to fit the design requirements of their projects.
- **Modular Approach**: Instead of bloating the codebase, Vuelize follows a modular approach that allows developers to use only the components they need.
- **Performance-Focused**: Being lightweight, it focuses on maintaining the performance of Vue 3 applications.

This library is particularly useful when you want seamless UI development with consistency, while still having the freedom to extend or customize as per your app's needs. It is well-suited for modern web apps that require reusable, quality components within the Vue ecosystem. You can start using Vuelize in your project by setting it up in your `main.ts` file and configuring it based on your requirements.

:::info
This is an info box.
:::

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

```ts:line-numbers=1 {1}
code here
```
<script setup>
import Header from '../../components/Header.vue'
</script>

<Header/>