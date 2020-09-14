import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Medium])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  navItems = [
    [
      { route: '#', label: 'Home', icon: 'home' },
      { route: '#', label: 'Trending', icon: 'local_fire_department' },
      { route: '#', label: 'Subscriptions', icon: 'subscriptions' },
      { route: '#', label: 'Originals', icon: 'ondemand_video' }
    ],
    [
      { route: '#', label: 'Library', icon: 'video_library' },
      { route: '#', label: 'History', icon: 'history' },
      { route: '#', label: 'Your videos', icon: 'slideshow' },
      { route: '#', label: 'Purchases', icon: 'local_offer' },
      { route: '#', label: 'Watch later', icon: 'schedule' },
      { route: '#', label: 'Liked videos', icon: 'thumb_up' },
      { route: '#', label: 'Playlist', icon: 'playlist_play' }
    ],
    [
      { route: '#', label: 'Movies & Shows', icon: 'theaters' },
      { route: '#', label: 'Gaming', icon: 'sports_esports' },
      { route: '#', label: 'Live', icon: 'cast' },
      { route: '#', label: 'Fashion & Beauty', icon: 'checkroom' },
      { route: '#', label: 'Learning', icon: 'emoji_objects' }
    ],
    [
      { route: '#', label: 'Settings', icon: 'settings' },
      { route: '#', label: 'Report history', icon: 'flag' },
      { route: '#', label: 'Help', icon: 'help' },
      { route: '#', label: 'Send feedback', icon: 'feedback' }
    ]
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

}
