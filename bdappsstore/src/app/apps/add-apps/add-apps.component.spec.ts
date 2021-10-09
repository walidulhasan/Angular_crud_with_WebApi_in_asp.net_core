import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppsComponent } from './add-apps.component';

describe('AddAppsComponent', () => {
  let component: AddAppsComponent;
  let fixture: ComponentFixture<AddAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
