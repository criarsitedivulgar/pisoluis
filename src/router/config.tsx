import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const QuemSomosPage = lazy(() => import('../pages/quem-somos/page'));
const ServicosPage = lazy(() => import('../pages/servicos/page'));
const ContatoPage = lazy(() => import('../pages/contato/page'));
const PortfolioPage = lazy(() => import('../pages/portfolio/page'));
const LimpezaProfissionalPage = lazy(() => import('../pages/servicos/limpeza-profissional/page'));
const PolimentoCristalizacaoPage = lazy(() => import('../pages/servicos/polimento-cristalizacao/page'));
const TrocaRejuntePage = lazy(() => import('../pages/servicos/troca-rejunte/page'));
const RevitalizacaoPage = lazy(() => import('../pages/servicos/revitalizacao/page'));
const ImpermeabilizacaoPage = lazy(() => import('../pages/servicos/impermeabilizacao/page'));
const RestauracaoPage = lazy(() => import('../pages/servicos/restauracao/page'));
const NotFound = lazy(() => import('../pages/NotFound'));
import PoliticaPrivacidadePage from '../pages/politica-privacidade/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/quem-somos',
    element: <QuemSomosPage />,
  },
  {
    path: '/servicos',
    element: <ServicosPage />,
  },
  {
    path: '/contato',
    element: <ContatoPage />,
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />,
  },
  {
    path: '/servicos/limpeza-profissional',
    element: <LimpezaProfissionalPage />,
  },
  {
    path: '/servicos/polimento-cristalizacao',
    element: <PolimentoCristalizacaoPage />,
  },
  {
    path: '/servicos/troca-rejunte',
    element: <TrocaRejuntePage />,
  },
  {
    path: '/servicos/revitalizacao',
    element: <RevitalizacaoPage />,
  },
  {
    path: '/servicos/impermeabilizacao',
    element: <ImpermeabilizacaoPage />,
  },
  {
    path: '/servicos/restauracao',
    element: <RestauracaoPage />,
  },
  {
    path: '/politica-privacidade',
    element: <PoliticaPrivacidadePage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
