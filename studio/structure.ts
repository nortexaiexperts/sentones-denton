import {CalendarIcon} from '@sanity/icons/Calendar'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {SyncIcon} from '@sanity/icons/Sync'
import {UserIcon} from '@sanity/icons/User'
import type {StructureResolver} from 'sanity/structure'

/** The left-hand menu Karen sees, in plain words and a sensible order. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Sent Ones Denton')
    .items([
      S.listItem()
        .title('Upcoming events')
        .icon(CalendarIcon)
        .child(
          S.documentTypeList('event')
            .title('Upcoming events')
            .filter('_type == "event" && coalesce(end, start) >= now()')
            .defaultOrdering([{field: 'start', direction: 'asc'}]),
        ),
      S.listItem()
        .title('Past events')
        .icon(CalendarIcon)
        .child(
          S.documentTypeList('event')
            .title('Past events')
            .filter('_type == "event" && coalesce(end, start) < now()')
            .defaultOrdering([{field: 'start', direction: 'desc'}]),
        ),
      S.listItem()
        .title('Standing rhythms')
        .icon(SyncIcon)
        .child(S.documentTypeList('rhythm').title('Standing rhythms').defaultOrdering([{field: 'order', direction: 'asc'}])),
      S.divider(),
      S.listItem()
        .title('Blog posts')
        .icon(DocumentTextIcon)
        .child(S.documentTypeList('post').title('Blog posts').defaultOrdering([{field: 'date', direction: 'desc'}])),
      S.listItem().title('Authors').icon(UserIcon).child(S.documentTypeList('author').title('Authors')),
    ])
