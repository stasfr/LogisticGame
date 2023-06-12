<template>
  <Scene :sceneOptions="generateTests()" />
  <BuildBtn />
  <AdminBtn />
</template>

<script setup>
const generateTests = () => {
  let tests = [
    {
      id: 1,
      x: 100,
      y: 100,
      width: 200,
      height: 100
    }
  ];

  for (let i = 2; i < 5; i++) {
    tests.push({
      id: i,
      x: tests[i - 2].x + 250,
      y: 100,
      width: 200,
      height: 100 * i * 0.5 + 100
    });
  }

  for (let i = 5; i < 9; i++) {
    tests.push({
      id: i,
      x: tests[i - 5].x + 250,
      y: 500,
      width: 200,
      height: 100 * i * 0.5 + 100
    });
  }

  return tests;
};

const testOptions = {
  x: 100,
  y: 100,
  width: 300,
  height: 200
};
</script>
