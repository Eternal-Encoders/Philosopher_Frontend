import { Book } from 'pages/Book';
import { Cards } from 'pages/Cards';
import { Chat } from 'pages/Chat';
import { NotFound } from 'pages/NotFound';
import { Persons } from 'pages/Persons';
import type { RouteProps } from 'react-router';

enum AppRoutes {
  CHAT = 'chat',
  CARDS = 'cards',
  BOOK = 'book',
  PERSONS = 'persons',
  INDEX = 'index',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.CHAT]: '/chat',
  [AppRoutes.CARDS]: '/cards',
  [AppRoutes.BOOK]: '/book',
  [AppRoutes.PERSONS]: '/persons',
  [AppRoutes.INDEX]: '/',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.CHAT]: {
    path: RoutePath.chat,
    element: <Chat className='chat' />
  },
  [AppRoutes.CARDS]: {
    path: RoutePath.cards,
    element: <Cards className='cards' />
  },
  [AppRoutes.BOOK]: {
    path: RoutePath.book,
    element: <Book className='book' />
  },
  [AppRoutes.PERSONS]: {
    path: RoutePath.persons,
    element: <Persons className='persons' />
  },
  [AppRoutes.INDEX]: {
    path: RoutePath.index,
    element: <Chat className='chat' />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound className='notFound' />
  }
};