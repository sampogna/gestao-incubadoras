import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProspeccaoReuniaoComponent } from './edit-prospeccao-reuniao.component';

describe('EditProspeccaoReuniaoComponent', () => {
  let component: EditProspeccaoReuniaoComponent;
  let fixture: ComponentFixture<EditProspeccaoReuniaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProspeccaoReuniaoComponent]
    });
    fixture = TestBed.createComponent(EditProspeccaoReuniaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
