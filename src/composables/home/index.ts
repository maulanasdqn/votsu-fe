import { ref, computed } from 'vue'
import LogoVotsu from '../../assets/logo/LogoVotsu.svg'

export const useSetDark = document.querySelector('html')?.classList.add('dark')
export const useUnsetDark = document
  .querySelector('html')
  ?.classList.remove('dark')

export const useCommon = ref({
  isDark: false,
})

export const useLogo = LogoVotsu
