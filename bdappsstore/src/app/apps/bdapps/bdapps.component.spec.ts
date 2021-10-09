import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdappsComponent } from './bdapps.component';

describe('BdappsComponent', () => {
  let component: BdappsComponent;
  let fixture: ComponentFixture<BdappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdappsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
