 import {BlogArticle} from './BlogArticle';
import { HATEOASResponse } from './HATEOAS/HATEOASResponse';

export const HATEOASMock: HATEOASResponse =
{
    _embedded: {
        articles: [
            {
                title: "Test Article",
                posteddate: "2019-05-30T00:00:00.000+0000",
                content: "011100100010010010010010",
                tags: [
                    "test",
                    "test2"
                ],
                publish: true,
                _links: {
                    self: {
                        "href": "http://localhost:9090/api/articles/6"
                    },
                    article: {
                        "href": "http://localhost:9090/api/articles/6"
                    }
                }
            },
            {
                title: "Test Article 2",
                posteddate: "2019-06-01T00:00:00.000+0000",
                content: "Second Article",
                tags: [
                    "test",
                    "test3"
                ],
                publish: true,
                _links: {
                    self: {
                        "href": "http://localhost:9090/api/articles/7"
                    },
                    article: {
                        "href": "http://localhost:9090/api/articles/7"
                    }
                }
            }
        ]
    },
    _links: {
        first: {
            href: "http://localhost:9090/api/articles?page=0&size=5"
        },
        prev: {
            href: "http://localhost:9090/api/articles?page=0&size=5"
        },
        self: {
            href: "http://localhost:9090/api/articles{&sort}",
            templated: true
        },
        last: {
            href: "http://localhost:9090/api/articles?page=1&size=5"
        },
        profile: {
            href: "http://localhost:9090/api/profile/articles"
        }
    },
    page: {
        size: 5,
        totalElements: 7,
        totalPages: 2,
        number: 1
    }

}