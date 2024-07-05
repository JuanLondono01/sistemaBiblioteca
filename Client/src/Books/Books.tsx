import { useState } from 'react';
import { Genres } from '../Books/components/Genres';
import { SideBar } from '../Global/Components/SideBar';
import { SearchBar } from '../Global/Components/SearchBar';
import './styles/books.css';

export const Books = () => {
    const [activeGenres, setActiveGenres] = useState<string[]>([]);

    const handleGenreClick = (genre: string) => {
        if (activeGenres.includes(genre)) {
            setActiveGenres(activeGenres.filter((g) => g !== genre));
        } else {
            setActiveGenres([...activeGenres, genre]);
        }
    };

    const isGenreActive = (genre: string) => activeGenres.includes(genre);

    return (
        <>
            <SideBar
                activeBooks={true}
                activeUsers={false}
                activeLoans={false}
                activeSettings={false}
            />
            <h1>Sistema Biblioteca</h1>

            <h2>Books</h2>
            <div className='action-bar'>
                <section className='filters'>
                    <Genres
                        text='Terror'
                        isActive={isGenreActive('Terror')}
                        onClick={() => handleGenreClick('Terror')}
                        genre={'Terror'}
                    />
                    <Genres
                        text='Suspenso'
                        isActive={isGenreActive('Suspenso')}
                        onClick={() => handleGenreClick('Suspenso')}
                        genre='Suspenso'
                    />
                    <Genres
                        text='Accion'
                        isActive={isGenreActive('Accion')}
                        onClick={() => handleGenreClick('Accion')}
                        genre='Accion'
                    />
                    <Genres
                        text='Historia'
                        isActive={isGenreActive('Historia')}
                        onClick={() => handleGenreClick('Historia')}
                        genre='Historia'
                    />
                    <Genres
                        text='Drama'
                        isActive={isGenreActive('Drama')}
                        onClick={() => handleGenreClick('Drama')}
                        genre='Drama'
                    />
                </section>

                <SearchBar />
            </div>
        </>
    );
};
