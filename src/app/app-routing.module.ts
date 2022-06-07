import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SongDeleteComponent } from './components/song-delete/song-delete.component';
import { SongEditComponent } from './components/song-edit/song-edit.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongNewComponent } from './components/song-new/song-new.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SongListComponent
  },
  {
    path: 'new',
    component: SongNewComponent
  },
{
  path: 'edit',
  component: SongEditComponent
},
{
path: 'delete',
component: SongDeleteComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
