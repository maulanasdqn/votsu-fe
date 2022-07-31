<template>
  <Suspense>
    <template #default>
      <section
        class="flex flex-col justify-between w-full h-screen items-center"
      >
        <div class="flex w-full h-full">
          <Sidebar />
          <slot> </slot>
        </div>
        <Header user="MS" title="Dashboard" />
        <BottomNavbar />
      </section>
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>
