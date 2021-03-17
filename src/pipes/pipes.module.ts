
import { NgModule } from '@angular/core';
import { CurencyPipe } from './curency.pipe';
import { sanitizeHtmlPipe } from './sanitize-html.pipe';
import { TranslateAppPipe } from './translate-app/translate-app.pipe';
@NgModule({
    declarations: [CurencyPipe,TranslateAppPipe, sanitizeHtmlPipe],
    imports: [],
    exports: [CurencyPipe,TranslateAppPipe, sanitizeHtmlPipe]
})
export class PipesModule { }
