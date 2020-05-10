import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardTableComponent } from './dasboard-table.component';

describe('DasboardTableComponent', () => {
  let component: DasboardTableComponent;
  let fixture: ComponentFixture<DasboardTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
