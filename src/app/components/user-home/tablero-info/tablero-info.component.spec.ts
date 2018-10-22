import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroInfoComponent } from './tablero-info.component';

describe('TableroInfoComponent', () => {
  let component: TableroInfoComponent;
  let fixture: ComponentFixture<TableroInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableroInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
