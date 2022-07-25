<template>
  <section class="flex flex-col justify-between w-full h-screen items-center">
    <div class="flex w-full h-full">
      <Sidebar />
      <Empty to="/user/election" has-button />
    </div>
    <Header user="MS" title="Dashboard" />
    <BottomNavbar />
  </section>
</template>
