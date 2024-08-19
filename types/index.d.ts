interface recipeData {
  img: string | StaticImport
  title: string
  text?: string
  rating?: number
  favourite?: boolean
}

interface notificationData {
  action: 'comment' | 'like' | 'follow'
  senderImg: string | StaticImport
  senderName: string
  sendTime: string // change
  comment?: string
  to?: string | StaticImport // change?
}