import { Button } from './Button';
import '../styles/sidebar.scss';

export function SideBar(props: { genres: any[]; handleClickButton: (arg0: any) => void; selectedGenreId: any; }) {
  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genres.map((genre: { id: any; title: string; name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'; }) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.handleClickButton(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}