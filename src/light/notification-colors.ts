import type {
  NotificationCenter,
  NotificationCenterHeader,
  NotificationToast,
  Notifications,
  NotificationLink,
  NotificationsErrorIcon,
  NotificationsWarningIcon,
  NotificationsInfoIcon
} from 'src/types/Notification'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const notificationCenter = (): Partial<NotificationCenter> => ({
  ['notificationCenter.border']: ''
})

const notificationCenterHeader = (): Partial<NotificationCenterHeader> => ({
  ['notificationCenterHeader.foreground']: '',
  ['notificationCenterHeader.background']: ''
})

const notificationToast = (): Partial<NotificationToast> => ({
  ['notificationToast.border']: mapColorsWithRuntimeWeight('300')
})

const notifications = (): Partial<Notifications> => ({
  ['notifications.foreground']: mapColorsWithRuntimeWeight('500'),
  ['notifications.background']: colors.grayColors300,
  ['notifications.border']: ''
})

const notificationLink = (): Partial<NotificationLink> => ({
  ['notificationLink.foreground']: ''
})

const notificationsErrorIcon = (): Partial<NotificationsErrorIcon> => ({
  ['notificationsErrorIcon.foreground']: ''
})

const notificationsWarningIcon = (): Partial<NotificationsWarningIcon> => ({
  ['notificationsWarningIcon.foreground']: ''
})

const notificationsInfoIcon = (): Partial<NotificationsInfoIcon> => ({
  ['notificationsInfoIcon.foreground']: ''
})

export default {
  notificationCenter,
  notificationCenterHeader,
  notificationToast,
  notifications,
  notificationLink,
  notificationsErrorIcon,
  notificationsWarningIcon,
  notificationsInfoIcon
}
