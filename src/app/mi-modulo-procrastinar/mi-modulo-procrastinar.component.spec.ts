import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiModuloProcrastinarComponent } from './mi-modulo-procrastinar.component';

describe('MiModuloProcrastinarComponent', () => {
  let component: MiModuloProcrastinarComponent;
  let fixture: ComponentFixture<MiModuloProcrastinarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiModuloProcrastinarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiModuloProcrastinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
