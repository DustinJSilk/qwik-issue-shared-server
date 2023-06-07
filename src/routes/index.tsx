import { component$ } from "@builder.io/qwik";
import { routeLoader$, server$ } from "@builder.io/qwik-city";

export async function getData() {
  // This function remains in the compiled index.tsx file loaded in the browser
  return "Some data";
}

export const useData = routeLoader$(() => {
  return getData();
});

export const nextPage = server$(() => {
  return getData();
});

export default component$(() => {
  const data = useData();

  return (
    <>
      {data.value}

      <button
        onClick$={() => {
          nextPage().then((data) => console.log(data));
        }}
      >
        Click me
      </button>
    </>
  );
});
