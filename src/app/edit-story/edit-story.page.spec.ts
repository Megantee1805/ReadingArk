import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditStoryPage } from './edit-story.page';

describe('EditStoryPage', () => {
  let component: EditStoryPage;
  let fixture: ComponentFixture<EditStoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditStoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
