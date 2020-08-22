import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavedStoriesPage } from './saved-stories.page';

describe('SavedStoriesPage', () => {
  let component: SavedStoriesPage;
  let fixture: ComponentFixture<SavedStoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedStoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedStoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
