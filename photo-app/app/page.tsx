import {Suspense} from 'react'
import PhotoGrid from "./components/PhotoGrid";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Loader from './components/Loader';
import Footer from './components/Footer';

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  console.log("searchParams", searchParams)
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <>
      <div className='mt-14 app-contents'>
      <SearchBar />
      
      <div className="pl-3 pr-3 mt-5 mb-5">
        <Filter />
        <Suspense key={query+currentPage} fallback={<Loader/>}>
           <PhotoGrid query={query} currentPage={currentPage} per_page={10} />
        </Suspense>
      </div>

      </div>
    </>
  );
}
