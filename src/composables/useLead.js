import { reactive } from 'vue'

export const lead = reactive({ plan: '', location: '', tab: 'students' })

export function choosePlan(id) {
  lead.plan = id
}
