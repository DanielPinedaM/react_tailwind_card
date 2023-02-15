import './App.css';
import React, { useReducer } from 'react';

// Tipos de datos
type Tour = string;

type Activity = {
  id: number;
  tours: Tour[];
};

type AppState = {
  activities: Activity[];
};

// payload = nuevos datos
type Action =
  | { type: 'SET_TOURS'; payload: Tour[] }
  | { type: 'ADD_TOUR'; payload: { activityId: number; tour: Tour } }
  | { type: 'EDIT_ACTIVITY'; payload: Activity };

/* estado inicial objeto,
asignar el mismo objeto a cada Hook 
para q cada Hook siempre modifique el mismo objeto*/
const initialStateA: AppState = {
  activities: [
    {
      id: 1,
      tours: ['tour 0'],
    },
  ],
};

const initialStateB: AppState = {
  activities: [
    {
      id: 1,
      tours: ['tour 0'],
    },
  ],
};

const initialStateC: AppState = {
  activities: [
    {
      id: 1,
      tours: ['tour 0'],
    },
  ],
};

/* a. Reemplazar propiedad objeto `tours` totalmente con un nuevo conjunto de datos */
const reducerA = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'SET_TOURS':
      return { ...state, activities: [{ ...state.activities[0], tours: action.payload }] };
    default:
      return state;
  }
};

/* b. Agregar un nuevo elemento a propiedad objeto `tours` */
const reducerB = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'ADD_TOUR':
      return {
        ...state,
        activities: [
          { ...state.activities[0], tours: [...state.activities[0].tours, action.payload] },
        ],
      };
    default:
      return state;
  }
};

/* c. Buscar propiedad objeto por ID y reemplazar una sola propiedad existente en especifico */
const reducerC = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'EDIT_ACTIVITY':
      return {
        ...state,
        activities: state.activities.map((activity) =>
          activity.id === action.payload.id
            ? { ...activity, tours: action.payload.tours }
            : activity
        ),
      };
    default:
      return state;
  }
};

const App = () => {
  const [stateA, dispatchA] = useReducer(reducerA, initialStateA);
  const [stateB, dispatchB] = useReducer(reducerB, initialStateB);

  // Función para actualizar la actividad con ID 1
  const [stateC, dispatchC] = useReducer(reducerC, initialStateC);
  const actualizarActividad = () => {
    dispatchC({
      type: 'EDIT_ACTIVITY',
      payload: { id: 1, tours: ['new tour 1', 'new tour 2'] },
    });
  };

  return (
    <div>
      <section className='max-w-[375.008px] mx-auto my-1.5 flex flex-col'>
        <img
          src='../public/devolver.png'
          alt='devolver.png'
          className='absolute mt-5 pl-5'
        />
        <img src='../public/principal.png' alt='principal.png' />

        <div className='bg-zinc-200 relative bottom-12 border-solid rounded-t-[50px]'>
          <div className='relative bottom-12 flex iconos:flex-col flex-wrap justify-center items-center content-center'>
            <img src='../public/circulo1.png' alt='circulo1.png' className='rounded-[100%]' />
            <img src='../public/circulo2.png' alt='circulo2.png' className='rounded-[100%]' />
            <img src='../public/circulo3.png' alt='circulo3.png' className='rounded-[100%]' />
          </div>

          <article className='px-5 mb-5 flex flex-row flex-wrap justify-between items-center'>
            <div className='flex flex-col flex-nowrap'>
              <h2 className='font-bold text-step-1'>Jessica Parker, 23</h2>
              <p className='text-step--1'>Proffesional model</p>
            </div>
            <div>
              <img src='../public/compartir.png' alt='compartir.png' />
            </div>
          </article>

          <article className='px-5 mb-5 flex flex-row flex-wrap justify-between items-center'>
            <div className='flex flex-col flex-nowrap'>
              <h3 className='font-bold text-step--1'>Location</h3>
              <p className='text-step--1'>Chicago, IL United States</p>
            </div>
            <div>
              <img src='../public/location.png' alt='location.png' />
            </div>
          </article>

          <article className='px-5 mb-5'>
            <h3 className='font-bold text-step--1'>About</h3>
            <p className='text-step--1'>
              My name is Jessica Parker and I enjoy meeting new people and finding ways to help them
              have and uplifting experience. I enjoy readind..
              <a href='#' className='font-bold text-step--1 block text-red-600 mt-2'>
                Read more
              </a>
            </p>
          </article>

          <div className='px-5 mb-5'>
            <h3 className='font-bold mb-3 text-step--1'>Interests</h3>
            <div className='flex gap-3 flex-wrap flex-row items-center'>
              <a
                href='#'
                className='text-step--1 p-2 border-2 border-solid border-red-600 rounded flex flex-nowrap gap-x-5 flex-row'
              >
                <img src='../public/chulo.png' alt='' />
                Travelling
              </a>
              <a
                href='#'
                className='text-step--1 p-2 border-2 border-solid border-red-600 rounded flex flex-nowrap gap-x-5 flex-row'
              >
                <img src='../public/chulo.png' alt='' />
                Books
              </a>
              <a
                href='#'
                className='text-step--1 p-2 border-2 border-solid border-stone-600 rounded'
              >
                Music
              </a>
              <a
                href='#'
                className='text-step--1 p-2 border-2 border-solid border-stone-600 rounded'
              >
                Dancing
              </a>
              <a
                href='#'
                className='text-step--1 p-2 border-2 border-solid border-stone-600 rounded'
              >
                Modeling
              </a>
            </div>
          </div>

          <section className='px-5 mb-5'>
            <div className='my-2 flex flex-row justify-between'>
              <h3 className='font-bold text-step--1'>Gallery</h3>
              <a href='#' className='font-bold text-step--1 text-red-600'>
                See all
              </a>
            </div>
            <div className='flex flex-row flex-wrap justify-center items-center content-center gap-y-3'>
              <img src='../public/galeria1.png' alt='galeria1.png' />
              <img src='../public/galeria2.png' alt='galeria2.png' />
              <img src='../public/galeria3.png' alt='galeria3.png' />
              <img src='../public/galeria4.png' alt='galeria4.png' />
              <img src='../public/galeria5.png' alt='galeria5.png' />
            </div>
          </section>
        </div>
      </section>

      <br />
      <hr />
      <br />

      <div>
        <h3>Estado Inicial:</h3>
        <pre>{JSON.stringify(initialStateA, null, 2)}</pre>
      </div>

      <hr />

      <div>
        <h3>Resultado de Hook A:</h3>
        <button
          className='bg-zinc-200 border-4 border-black'
          onClick={() =>
            dispatchA({
              type: 'SET_TOURS',
              payload: { activityId: 1, tours: ['new tour 1', 'new tour 2'] },
            })
          }
        >
          Reemplazar tours
        </button>
        <pre>{JSON.stringify(stateA, null, 2)}</pre>
      </div>

      <hr />

      <div>
        <h3>Resultado de Hook B:</h3>
        <button
          className='bg-zinc-200 border-4 border-black'
          onClick={() =>
            dispatchB({
              type: 'ADD_TOUR',
              payload: { activityId: 1, tour: `tour ${stateB.activities[0].tours.length}` },
            })
          }
        >
          Agregar tour
        </button>
        <pre>{JSON.stringify(stateB, null, 2)}</pre>
      </div>

      <hr />

      <div>
        <h3>Resultado de Hook C:</h3>
        <button className='bg-zinc-200 border-4 border-black' onClick={actualizarActividad}>
          Actualizar actividad con ID 1
        </button>
        <pre>{JSON.stringify(stateC, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
