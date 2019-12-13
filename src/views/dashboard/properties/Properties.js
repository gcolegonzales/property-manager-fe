/* eslint-disable no-lone-blocks */
import React, { useEffect } from 'react';
// UI
import { Skeleton } from '@material-ui/lab';
import {
  Paper,
  Grid,
  CardHeader,
  CardContent,
  Typography,
  Divider
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
// action
import { getProperties } from '../../../store/actions';

export default function PropertyList() {
  const dispatch = useDispatch();

  const { properties } = useSelector(state => state.propReducer.properties);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        getProperties(
          'https://pt6-propman-staging.herokuapp.com/api/properties'
        )
      );
    }, 2000);
  }, [dispatch]);

  return (
    <div className="properties">
      <h1>List of Properties</h1>
      <Divider />
      <br />
      <Grid container spacing={3}>
        {properties ? (
          properties.map(property => {
            console.log(property);

            const {
              id,
              name,
              city,
              street,
              /* status, */ state,
              zip
            } = property;

            return (
              <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
                <Paper elevation={5}>
                  <CardHeader
                    title={<Typography variant="body1">{name}</Typography>}
                  />

                  {city ? (
                    <CardContent>
                      <Typography variant="body1">Location:</Typography>
                      <Typography variant="body2">{street}</Typography>
                      <Typography variant="body2">
                        {city}, {state}, {zip}
                      </Typography>
                    </CardContent>
                  ) : (
                    <CardContent>
                      <Typography variant="caption">
                        No location info.
                      </Typography>
                    </CardContent>
                  )}
                </Paper>
              </Grid>
            );
          })
        ) : (
          <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper elevation={5}>
                <CardHeader title={<Skeleton variant="text" />} />
                <CardContent>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                </CardContent>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper elevation={5}>
                <CardHeader title={<Skeleton variant="text" />} />
                <CardContent>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                </CardContent>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper elevation={5}>
                <CardHeader title={<Skeleton variant="text" />} />
                <CardContent>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                </CardContent>
              </Paper>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}
