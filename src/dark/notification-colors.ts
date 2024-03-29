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

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const notificationCenter = (): Partial<NotificationCenter> => ({
  ['notificationCenter.border']: ''
})

const notificationCenterHeader = (): Partial<NotificationCenterHeader> => ({
  ['notificationCenterHeader.foreground']: '',
  ['notificationCenterHeader.background']: ''
})

const notificationToast = (): Partial<NotificationToast> => ({
  ['notificationToast.border']: ''
})

const notifications = (): Partial<Notifications> => ({
  ['notifications.foreground']: mapColorsWithRuntimeWeight('100'),
  ['notifications.background']: colors.grayColors1000,
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
