import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiComponenteInmediatoComponent } from './mi-componente-inmediato.component';

describe('MiComponenteInmediatoComponent', () => {
  let component: MiComponenteInmediatoComponent;
  let fixture: ComponentFixture<MiComponenteInmediatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiComponenteInmediatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiComponenteInmediatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
