import React, { Component } from 'react'
import Table from 'harmonium/lib/Table'

export default function InputVars() {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header>
            Variable Name
          </Table.Header>
          <Table.Header>
            Default Value
          </Table.Header>
          <Table.Header>
            Description
          </Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.HeadStacked>
        <Table.Data>
          Input Vars
        </Table.Data>
      </Table.HeadStacked>
      <Table.Body>

        <Table.Row>
          <Table.Data>
            <Table.HeaderInline>Var:</Table.HeaderInline> <code>$input-bkgd</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Default Value:</Table.HeaderInline> <code>$white</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Description:</Table.HeaderInline> Default background color for inputs.
          </Table.Data>
        </Table.Row>

        <Table.Row>
          <Table.Data>
            <Table.HeaderInline>Var:</Table.HeaderInline> <code>$input-bkgd-focus</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Default Value:</Table.HeaderInline> <code>$input-bkgd</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Description:</Table.HeaderInline> Background color for inputs on focus.
          </Table.Data>
        </Table.Row>

        <Table.Row>
          <Table.Data>
            <Table.HeaderInline>Var:</Table.HeaderInline> <code>$input-box-shadow</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Default Value:</Table.HeaderInline> <code>0 0 0 1px $divider-color inset</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Description:</Table.HeaderInline> Default box-shadow for inputs.
          </Table.Data>
        </Table.Row>

        <Table.Row>
          <Table.Data>
            <Table.HeaderInline>Var:</Table.HeaderInline> <code>$input-box-shadow-focus</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Default Value:</Table.HeaderInline> <code>0 0 0 1px $divider-color-dark inset</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Description:</Table.HeaderInline> Default box-shadow for inputs on focus.
          </Table.Data>
        </Table.Row>

        <Table.Row>
          <Table.Data>
            <Table.HeaderInline>Var:</Table.HeaderInline> <code>$input-radius</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Default Value:</Table.HeaderInline> <code>$global-radius</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Description:</Table.HeaderInline> Default border-radius for inputs.
          </Table.Data>
        </Table.Row>

        <Table.Row>
          <Table.Data>
            <Table.HeaderInline>Var:</Table.HeaderInline> <code>$input-color</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Default Value:</Table.HeaderInline> <code>$body-font-color</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Description:</Table.HeaderInline> Default font color of inputs.
          </Table.Data>
        </Table.Row>

        <Table.Row>
          <Table.Data>
            <Table.HeaderInline>Var:</Table.HeaderInline> <code>$input-color-focus</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Default Value:</Table.HeaderInline> <code>$input-color</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Description:</Table.HeaderInline> Default font color of inputs on focus.
          </Table.Data>
        </Table.Row>
        
        <Table.Row>
          <Table.Data>
            <Table.HeaderInline>Var:</Table.HeaderInline> <code>$input-font-size</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Default Value:</Table.HeaderInline> <code>$global-font-size</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Description:</Table.HeaderInline> Default font size of inputs.
          </Table.Data>
        </Table.Row>

        <Table.Row>
          <Table.Data>
            <Table.HeaderInline>Var:</Table.HeaderInline> <code>$label-color</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Default Value:</Table.HeaderInline> <code>$body-font-color</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Description:</Table.HeaderInline> Default font color of input labels.
          </Table.Data>
        </Table.Row>

        <Table.Row>
          <Table.Data>
            <Table.HeaderInline>Var:</Table.HeaderInline> <code>$label-font-size</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Default Value:</Table.HeaderInline> <code>$global-font-size</code>
          </Table.Data>
          <Table.Data>
            <Table.HeaderInline>Description:</Table.HeaderInline> Default font size of input labels.
          </Table.Data>
        </Table.Row>
      </Table.Body>
    </Table>
  )

}
