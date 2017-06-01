/**
 * Created by user on 01-06-2017.
 */
/**
 * Created by user on 01-06-2017.
 */
import { Component } from '@angular/core';
import { News } from './news';

@Component({
    selector: 'news-detail',
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let dailyhunt of news"><span class="badge">{{dailyhunt.id}}</span>{{dailyhunt.title}}</li>
        </ul>
    `
})

export class NewsDetailComponent {
    title = 'News';
    news = [
        new News(11, 'Good Climate'),
        new News(12, 'Modi visits Germany')
    ];
}
