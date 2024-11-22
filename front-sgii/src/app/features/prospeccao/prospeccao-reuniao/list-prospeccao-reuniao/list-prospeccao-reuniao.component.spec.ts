import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProspeccaoReuniaoComponent } from './list-prospeccao-reuniao.component';

describe('ListProspeccaoReuniaoComponent', () => {
  let component: ListProspeccaoReuniaoComponent;
  let fixture: ComponentFixture<ListProspeccaoReuniaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProspeccaoReuniaoComponent]
    });
    fixture = TestBed.createComponent(ListProspeccaoReuniaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
