import { onMounted, onUnmounted, ref } from 'vue'

export function useActiveSection(sectionIds) {
  const activeSection = ref('inicio')
  let observer

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

      if (visible) activeSection.value = visible.target.id
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.15, 0.4] })

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
  })

  onUnmounted(() => observer?.disconnect())

  return activeSection
}
