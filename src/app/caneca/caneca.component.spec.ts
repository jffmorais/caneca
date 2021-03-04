import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanecaComponent } from './caneca.component';

describe('CanecaComponent', () => {
  let component: CanecaComponent;
  let fixture: ComponentFixture<CanecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
