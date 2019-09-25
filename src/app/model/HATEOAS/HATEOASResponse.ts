import { HATEOASEmbedded } from './HATEOASEmbedded';
import { HATEOASLinks } from './HATEOASLinks';
import { HATEOASPage } from './HATEOASPage';

export class HATEOASResponse {
        _embedded : object;
        _links : HATEOASLinks;
        page : HATEOASPage;
}
  