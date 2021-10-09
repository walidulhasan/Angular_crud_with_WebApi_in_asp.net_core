import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAppsComponent } from './delete-apps.component';

describe('DeleteAppsComponent', () => {
  let component: DeleteAppsComponent;
  let fixture: ComponentFixture<DeleteAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
