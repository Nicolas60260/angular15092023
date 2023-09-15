import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAnnoncesComponent } from './menu-annonces.component';

describe('MenuAnnoncesComponent', () => {
  let component: MenuAnnoncesComponent;
  let fixture: ComponentFixture<MenuAnnoncesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAnnoncesComponent]
    });
    fixture = TestBed.createComponent(MenuAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
