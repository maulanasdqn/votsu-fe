<template>
  <section class="flex flex-col justify-between w-full h-screen items-center">
    <div class="flex w-full h-full">
      <Sidebar />
      <div class="flex items-center ml-0 md:ml-20 gap-8">
        <Card
          candidate="Fahmi Sugiarto"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
        />
        <Card
          candidate="Fahmi Sugiarto"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
        />
        <Card
          candidate="Fahmi Sugiarto"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
        />
      </div>
    </div>
    <Header user="MS" title="Dashboard" />
    <BottomNavbar />
  </section>
</template>
