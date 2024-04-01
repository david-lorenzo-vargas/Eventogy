# Eventogy

1.  [Getting Started](#getting-started)
2.  [Description](#description)
3.  [Demo](#demo)
4.  [Stack](#stack)
5.  [Material UI](#materialUI)
6.  [Types](#types)
7.  [Atomic approach](#atomic-approach)
8.  [Custom Hooks](#customHooks)
9.  [Alias](#alias)
10. [Dynamic Routes](#dynamic-routes)
11. [Testing](#testing)
12. [Responsiveness](#responsiveness)
13. [Further Implementation](#further-implementation)

## Getting Started

First, install node modules:

```bash
npm install
```

Add `.env` file to the root of the project and declare `EVENTS_ENDPOINT_FETCH` (the endpoint provided in the task),

localhost:3000  has been blocked by CORS policy: No 'Access-Control-Allow-Origin'. In order to run the code please add the following Chrome extension `Moesif Origin & CORS Changer` from the following url [www.chromewebstore.google.com](https://chromewebstore.google.com/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc) and set it to "on"

![Screenshot 2024-04-01 at 15 19 11](https://github.com/david-lorenzo-vargas/Eventogy/assets/72414745/06b817f6-07e7-4932-8775-451e75547c31)

![Screenshot 2024-04-01 at 15 19 26](https://github.com/david-lorenzo-vargas/Eventogy/assets/72414745/d80c8eb4-14ec-4745-b5de-9628fd327e27)

![Screenshot 2024-04-01 at 15 19 41](https://github.com/david-lorenzo-vargas/Eventogy/assets/72414745/2e183c43-a69c-44ca-b4ec-7273e7a35340)


Then, run the development server:

```bash
npm run dev
```

Node.js 18.17.0 or later required.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

Event page built with Next.js, Material UI and Tailwind. When the user lands on `Home` page events gets fetched and displayed in the page.

The user can click on an Event and get redirected to a dynamic route as well as get redirected to a dynamic route when selecting 'Create new'

(further implementation is needed for fetching the event and display the correct info in the page)

## Demo

![Apr-01-2024 19-20-17](https://github.com/david-lorenzo-vargas/Eventogy/assets/72414745/0721eed3-5b67-4818-a376-9d19064205eb)

## Stack

<ul>
  <li>Next.js</li>
  <li>Typescript</li>
  <li>Tailwind</li>
  <li>Jest</li>
  <li>React Testing Library</li>
  <li>Material UI</li>
  <li>Axios</li>
</ul>

## Material UI

Material UI ha been used for `Atom` components

## Types

All types and enums have been declared in a `Types/types.ts`

## Atomic approach

Atomic approach has been used for structuring and ordering the componets separated in 'atoms', 'molecules' and 'organisms'.

## Custom Hooks

A custom hook `useScreenSize` has been created for checking the size of the user's screen and render different components if the user is using the app in mobile or desktop

## Alias

Alias added for improting utilities, types, icons and components.

`import Chevron from "@icon/Chevron";`
<br>
<br>

`import { Event } from "@customTypes/types";`
<br>
<br>

`import useScreenSize from "@util/hooks/useScreenSize";`

## Dynamic Routes

Dynamic routes have been added for opening events and when selecting 'Create New'.

[pages/create-new/[create]/page.tsx](http://localhost:3000/pages/create-new/Event)
<br>

[pages/event/[slug]/page.tsx](http://localhost:3000/pages/event/boehm-inc-1705595812)

(further implementetion needed for fetching data and display the correct info)

## Testing

Jest and React Testing Library have been used for testing. Testing has been added for some components but, as further implementation, it would be necessary to add more unit and integration testing for other functionalities and components.

For running tests: `npm run test`

## Responsiveness

The app is responsive and adjusts to desktop, tablet and mobile viewports, media queries have been added via Tailwind for adjusting the design to the screen size.

### Mobile

<table>
<tr>
<td width="50%"">
  
  ![Screenshot 2024-04-01 at 11 02 42](https://github.com/david-lorenzo-vargas/Eventogy/assets/72414745/a9a3ffbf-f7d5-44b8-9e18-02e2f4021b1c)
  
</td>
<td width="50%">
  
  ![Screenshot 2024-04-01 at 17 56 44](https://github.com/david-lorenzo-vargas/Eventogy/assets/72414745/32d7ba13-c6f7-4e9a-91f1-e6baa6c84805)
  
</td>
</tr>
</table>

### Tablet

![Screenshot 2024-04-01 at 11 02 59](https://github.com/david-lorenzo-vargas/Eventogy/assets/72414745/d3a3136a-4d51-4a33-90f3-30f2b3049b9d)

![Screenshot 2024-04-01 at 11 03 16](https://github.com/david-lorenzo-vargas/Eventogy/assets/72414745/9045b9a7-44e3-42d3-afd6-4916bbddeb5e)


### Desktop

![Screenshot 2024-04-01 at 11 02 28](https://github.com/david-lorenzo-vargas/Eventogy/assets/72414745/3d6af8c1-b6b4-46ba-8088-441f06179ff8)

## Further Implementation

Further implementation and functionality needed for example:

1. Search bar
2. Filtering
3. Event page data fetch
4. Event like functionality (POST)
6. Event more option button at the bottom right
7. Geolocation based in API response for Events (at the moment London has been hardcoded)
8. Create new page flow

