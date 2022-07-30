<template>
  <section class="flex flex-col justify-between w-full h-screen items-center">
    <div class="flex w-full h-full">
      <Sidebar />
      <div class="flex h-full bg-white items-start justify-center w-full">
        <div class="p-4 w-full">
          <div class="bg-white p-8 rounded-md w-full">
            <div class="flex items-center justify-between pb-6">
              <div
                class="flex flex-col space-y-6 md:flex-row w-full justify-between px-4"
              >
                <div class="flex flex-col">
                  <h2 class="text-gray-600 font-semibold">Data Akun</h2>
                </div>
                <div class="flex justify-center space-x-4 items-center">
                  <div class="flex flex-col gap-2">
                    <button
                      class="w-35 space-y-1 h-auto p-2 bg-gray-200 rounded-lg"
                    >
                      Tambah Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                  class="inline-block min-w-full shadow rounded-lg overflow-hidden"
                >
                  <table class="min-w-full bg-gray-200 leading-normal">
                    <thead class="bg-green-200">
                      <tr>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          No
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Kata Sandi
                        </th>
                        <th
                          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                          1
                        </td>
                        <td
                          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                          <div class="flex items-center">
                            <div class="">
                              <p class="text-gray-900 whitespace-no-wrap">
                                sugiartofahmi24@gmail.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td
                          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                          <p class="text-gray-900 whitespace-no-wrap">
                            ********
                          </p>
                        </td>
                        <td
                          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          >
                            Hapus
                          </button>
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            Ubah
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                          2
                        </td>
                        <td
                          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                          <div class="flex items-center">
                            <div class="">
                              <p class="text-gray-900 whitespace-no-wrap">
                                sugiartofahmi24@gmail.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td
                          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                          <p class="text-gray-900 whitespace-no-wrap">
                            ********
                          </p>
                        </td>
                        <td
                          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          >
                            Hapus
                          </button>
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            Ubah
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Header user="MS" title="Dashboard" />
    <BottomNavbar />
  </section>
</template>
