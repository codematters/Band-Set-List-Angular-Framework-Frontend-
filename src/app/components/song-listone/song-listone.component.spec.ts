import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListoneComponent } from './song-listone.component';

describe('SongListoneComponent', () => {
  let component: SongListoneComponent;
  let fixture: ComponentFixture<SongListoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongListoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
